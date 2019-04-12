import React from 'react';

export default props => {
    return (
        <div id="login-form">
        <span id="title">Login to answerket</span>
        <input
          ref={props.usernameRef}
          type="text"
          placeholder="username"
        />
        <input
          ref={props.passwordRef}
          type="password"
          placeholder="password"        />
        <button id="submit" onClick={props.loginHandler}>Login</button>
      </div>
    )
}