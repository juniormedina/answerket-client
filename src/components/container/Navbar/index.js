import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import './Navbar.scss';

class Navbar extends Component {
  renderContent = () => {
    return this.props.company ? (
      <ul>
        <li>
          <span className="nav-company">{this.props.company}</span>
        </li>
        <li>
          <span className="nav-logout">
            <i
              onClick={this.buttonLogoutHandler}
              className="fas fa-sign-out-alt"
            />
          </span>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/login" className="nav-link">Log in</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-link">Sign up</Link>
        </li>
      </ul>
    );
  };
  buttonLogoutHandler = () => {
    // Dispatches logout action
    actions.logout(this.history);
  };
  render() {
    return (
      <nav id="navbar">
        <div id="logo">
          <Link to="/">answerket</Link>
        </div>
        <div id="links">{this.renderContent()}</div>
      </nav>
    );
  }
}

const mapStateToProps = ({ company }) => {
  return { company };
};

export default connect(
  mapStateToProps,
  actions
)(Navbar);
