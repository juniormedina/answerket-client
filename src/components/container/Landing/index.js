import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div id="landing-container">
        <h1>Answerket is an intuitive customer support ticketing app.</h1>
        <h3>Create an account now, its free!</h3>
        <div onClick={this.buttonClickHandler} className="button">Get Started</div>
      </div>
    );
  }
  buttonClickHandler = () => {
      this.props.history.push('/signup');
  }
}

export default withRouter(Home);
