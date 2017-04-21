import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  headingClickable({ history }) {
    return (
      <h1 className="page-heading" onClick={() => history.push('/')}>
        combo project
      </h1>
    );
  }

  render() {
    return (
      <header className="page-header">
        <Route render={this.headingClickable} />
        <nav>
          <NavLink to="markdown">Markdown</NavLink>
          <NavLink to="questions">Questions</NavLink>
          <NavLink to="question-better">Quesiton Better</NavLink>
        </nav>
      </header>
    );
  }
}

export default connect()(Header);
