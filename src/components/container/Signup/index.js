import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../presentational/Signup/Form';

import * as actions from '../../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  render() {
    return (
      <SignupForm
        usernameRef={this.usernameRef}
        passwordRef={this.passwordRef}
        confirmPasswordRef={this.confirmPasswordRef}
        signupHandler={this.loginHandler}
      />
    );
  }

  signupHandler = () => {
    // Grabs credentials
    let username = this.usernameRef.current.value;
    let password = this.passwordRef.current.value;
    let confirmPassword = this.confirmPasswordRef.current.value;

    // Validates password
    if (confirmPassword === password) {
      // Dispatches signup action
      actions.signup(username, password, this.props.history);
      // TODO lock submit button until response recieved
    } else {
      // Dispatches error message
      // TODO...
    }
  };
}

export default connect(
  null,
  actions
)(Signup);
