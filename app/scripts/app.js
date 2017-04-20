import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRoot from './components/app_root.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

export default function app() {
  function classNames(location) {
    let classes = ['page-wrapper'];
    if (location.pathname === '/' || location.pathname === '') {
      classes.push('home-view');
    } else {
      classes.push(location.pathname.slice(1, location.pathname.length));
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
                <Route
                  exact
                  path="/"
                  component={() => {
                    return <h1>test</h1>;
                  }}
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
