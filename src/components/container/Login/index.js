import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../presentational/Login/Form';

import * as actions from '../../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  render() {
    return (
      <LoginForm
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
        loginHandler={this.loginHandler}
      />
    );
  }

  loginHandler = () => {
    // Grabs credentials
    let email = this.emailRef.current.value;
    let password = this.passwordRef.current.value;
    
    // Dispatches action
    this.props.login(email, password);
    // TODO lock submit button until response recieved
  };
}

export default connect(
  null,
  actions
)(Login);
