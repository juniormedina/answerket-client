import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../presentational/Signup/Form';

import * as actions from '../../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.companyRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  render() {
    if(this.props.lastActionSuccessful){
      this.props.clearLastAction();
      this.props.history.push('./login');
    }
    return (
      <SignupForm
        emailRef={this.emailRef}
        companyRef={this.companyRef}
        passwordRef={this.passwordRef}
        confirmPasswordRef={this.confirmPasswordRef}
        signupHandler={this.signupHandler}
      />
    );
  }

  signupHandler = () => {
    // Grabs credentials
    let email = this.emailRef.current.value;
    let companyName = this.companyRef.current.value;
    let password = this.passwordRef.current.value;
    let confirmPassword = this.confirmPasswordRef.current.value;

    // TODO - Proper validation
    // Validates confirm password and checks for empty values
    if (email && companyName && confirmPassword === password) {
      // Dispatches signup action
      this.props.signup(email, password, companyName);
      // TODO lock submit button until response recieved
    } else {
      // Dispatches error message
      // TODO...
    }
  };
}

const mapStateToProps = ({ company }) => ({
  lastActionSuccessful: company.lastActionSuccessful
});

export default withRouter(connect(
  mapStateToProps,
  actions
)(Signup));
