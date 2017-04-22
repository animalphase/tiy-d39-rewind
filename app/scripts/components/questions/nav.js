import React from 'react';
import { connect } from 'react-redux';
import container from '../../containers/all.js';
import { Route, Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  pathToQuestion(id) {
    let path = '/questions/question/' + id;
    return path;
  }

  render() {
    return (
      <nav>
        <h3>Questions:</h3>
        <ul>
          {this.props.questionsApp.questions.map((question, index) => {
            return (
              <li key={question.id}>
                <NavLink to={this.pathToQuestion(question.id)}>
                  {question.id}: {question.question}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default connect(container.allState)(Nav);
