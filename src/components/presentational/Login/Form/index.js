import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="login-form">
      <span id="title">Login to answerket</span>
      <input ref={props.emailRef} type="text" placeholder="email" />
      <input ref={props.passwordRef} type="password" placeholder="password" />
      <button id="submit" onClick={props.loginHandler}>
        Login
      </button>
    </div>
  );
};
