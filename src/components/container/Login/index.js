import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../presentational/Login/Form';

import './Login.scss';
import * as actions from '../../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  render() {
    return (
      <LoginForm
        usernameRef={this.usernameRef}
        passwordRef={this.passwordRef}
        loginHandler={this.loginHandler}
      />
    );
  }

  loginHandler = () => {
    // Grabs credentials
    let username = this.usernameRef.current.value;
    let password = this.passwordRef.current.value;
    
    // Dispatches action
    actions.login(username, password, this.props.history);
  };
}

export default connect(
  null,
  actions
)(Login);
