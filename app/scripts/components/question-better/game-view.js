import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../../containers/all.js';
import getCategories from '../../actions/get-categories.js';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.classNames = this.classNames.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  classNames() {
    var classes = ['better-page-wrapper'];
    if (this.props.betterApp.loading === true) {
      classes.push('loading');
    }
    return classes.join(' ');
  }

  render() {
    return (
      <main className={this.classNames()}>

        <div className="loading-display">
          <h2>loading…</h2>
        </div>

        <div className="game-display">

          <header>
            <h1>Question Better</h1>
          </header>

          <section className="game-board">
            <p>retrieved data visible in console returned state</p>
          </section>

        </div>

      </main>
    );
  }
}

export default connect(container.allState)(GameView);
