import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="signup-form">
      <span id="title">Signup now</span>
      <input ref={props.usernameRef} type="text" placeholder="username" />
      <input ref={props.companyRef} type="text" placeholder="company" />
      <input ref={props.passwordRef} type="password" placeholder="password" />
      <input
        ref={props.confirmPasswordRef}
        type="password"
        placeholder="confirm password"
      />
      <button id="submit" onClick={props.signupHandler}>
        Signup
      </button>
    </div>
  );
};
