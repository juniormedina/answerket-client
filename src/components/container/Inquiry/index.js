import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import View from '../../presentational/Inquiry';
import InquiryConfirmation from '../../presentational/Inquiry/Confirmation';
import InquiryError from '../../presentational/Inquiry/Error';
import axios from 'axios';

class Inquiry extends Component {
  constructor(props) {
    super(props);
    this.inquiryNameRef = React.createRef();
    this.inquirySubjectRef = React.createRef();
    this.inquiryMessageRef = React.createRef();
    this.views = {
      FORM: 'FORM',
      CONFIRMATION: 'CONFIRMATION',
      ERROR: 'ERROR'
    };
    this.state = {
      currentView: this.views.CONFIRMATION,
      confirmationURL: null
    };
  }

  componentDidMount() {
    // Dispatches get inquiry action
    actions.validateCompany(
      this.props.match.params.companyName,
      this.props.match.params.companyNumber
    );
  }

  buttonInquirySubmitHandler = async () => {
    // Grabs data from inputs
    let name = this.inquiryNameRef.current.value;
    let subject = this.inquirySubjectRef.current.value;
    let message = this.inquiryMessageRef.current.value;
    if (!name || !subject || !message) return; // TODO: Notify user about missing fields
    // Submits request to server
    let response = await axios.post('/api/inquiry_submit', {
      name,
      subject,
      message
    });
    if (response.data.isSuccessful) {
      this.setState({
        confirmationURL: response.data.confirmationURL,
        currentView: this.views.CONFIRMATION
      });
    } else {
      this.setState({ currentView: this.views.ERROR });
    }
  };

  renderContent = () => {
    switch (this.state.currentView) {
      case this.views.FORM:
        return this.renderInquiryForm();
      case this.views.CONFIRMATION:
        return this.renderInquiryConfirmation();
      case this.views.ERROR:
        return this.renderInquiryError();
      default:
        return null;
    }
  };

  // TODO: Refactor - Remove the need for a global state. Do async request and store state locally
  renderInquiryForm = () => {
    if (this.props.isValidCompany === null) {
      // waiting for server response
      return <h1>Loading...</h1>;
    } else if (this.props.isValidCompany) {
      // Company is valid
      return (
        <View
          name={this.props.match.params.companyName}
          number={this.props.match.params.companyNumber}
          buttonInquirySubmitHandler={this.buttonInquirySubmitHandler}
          inquiryNameRef={this.inquiryNameRef}
          inquirySubjectRef={this.inquirySubjectRef}
          inquiryMessageRef={this.inquiryMessageRef}
        />
      );
    } else {
      // Company is not valid
      return <h1>Invalid Company</h1>;
    }
  };

  renderInquiryConfirmation = () => {
    return (
      <InquiryConfirmation
        confirmationURL={this.state.confirmationURL}
        confirmationURLonClickHandler={this.confirmationURLonClickHandler}
      />
    );
  };

  confirmationURLonClickHandler = () => {
    this.props.history.push(this.state.confirmationURL);
  };

  renderInquiryError = () => {
    return <InquiryError />;
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ inquirer }) => {
  return { isValidCompany: inquirer.isValidCompany };
};

export default connect(mapStateToProps)(Inquiry);
