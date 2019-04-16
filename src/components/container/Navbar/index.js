import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.scss';

class Navbar extends Component {
  renderContent = () => {
    return (
      <ul>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    );
  };
  render() {
    return (
      <nav id="navbar">
        <div id="logo">
          <Link to="/">answerket</Link>
        </div>
        <div id="links">
            {this.renderContent()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ username }) => {
  return { username };
};

export default connect(mapStateToProps)(Navbar);
