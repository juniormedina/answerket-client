import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import './Navbar.scss';

class Navbar extends Component {
  renderContent = () => {
    return this.props.name ? (
      <ul>
        <li>
          <span className="nav-company">{this.props.name} #{this.props.number}</span>
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
    this.props.logout();
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
  return { name: company.name, number: company.number };
};

export default connect(
  mapStateToProps,
  actions
)(Navbar);
