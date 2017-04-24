import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../../containers/all.js';

class LoadingClues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <h2>loading clues…</h2>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(LoadingClues);
