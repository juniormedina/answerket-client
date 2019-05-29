import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div id="landing-container">
        <h1>Intuitive Customer Support Ticketing App.</h1>
        <span className="sub-header">answerket helps save time and money.</span>
        <img src={require('../../../images/support.jpg')} alt="business woman"/>
        <span className="sub-text">Create an account now, its <b><i>FREE</i></b>!</span>
        <div onClick={this.buttonClickHandler} className="button">Get Started</div>
      </div>
    );
  }
  buttonClickHandler = () => {
      this.props.history.push('/signup');
  }
}

export default withRouter(Home);
