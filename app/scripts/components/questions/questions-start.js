import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../../containers/all.js';
import Header from './header.js';
import Nav from './nav.js';

class QuestionsStart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="content-wrapper">
        <Header className="questions-header" username={this.props.username} />
        <div className="page-frame">
          <Nav />
          <section className="page-content">
            <h2>🙋🏻 Hello!</h2>
            <p>
              There are
              {' '}
              <em>{this.props.questionsApp.questions.length}</em>
              {' '}
              questions.
            </p>
            <button
              onClick={() => this.props.history.push('questions/question/1')}
              type="button"
            >
              Start! 👩🏻‍💻
            </button>
          </section>
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(QuestionsStart);
