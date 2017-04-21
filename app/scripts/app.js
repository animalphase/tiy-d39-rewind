import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Header from './components/header.js';
import Footer from './components/footer.js';
import HomeView from './components/home-view.js';
import EnterPost from './components/markdown/enter-post.js';

export default function app() {
  function classNames(location) {
    let classes = ['page-wrapper'];
    if (location.pathname === '/' || location.pathname === '') {
      classes.push('home-view');
    } else {
      let newClasses = location.pathname
        .slice(1, location.pathname.length)
        .split('/');
      classes.push(...newClasses);
    }
    return classes.join(' ');
  }

  render(
    <Provider store={store}>
      <Router>
        <Route
          render={({ location }) => {
            return (
              <div className={classNames(location)}>
                <Header />
                <Route exact path="/" component={HomeView} />
                <Route
                  exact
                  path="/markdown"
                  component={EnterPost}
                  initalValue={store.getState().draft}
                />
                <Footer />
              </div>
            );
          }}
        />

      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
