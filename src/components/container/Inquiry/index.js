import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import View from '../../presentational/Inquiry';

class Inquiry extends Component {
  constructor(props) {
    super(props);
    this.inquiryNameRef = React.createRef();
    this.inquirySubjectRef = React.createRef();
    this.inquiryMessageRef = React.createRef();
  }

  componentDidMount() {
    // Dispatches get inquiry action
    actions.validateCompany(
      this.props.match.params.companyName,
      this.props.match.params.companyNumber
    );
  }

  buttonInquirySubmitHandler = () => {
    // Grabs data from inputs
    let name = this.inquiryNameRef.current.value;
    let subject = this.inquirySubjectRef.current.value;
    let message = this.inquiryMessageRef.current.value;
    if (!name || !subject || !message) return; // TODO: Notify user about missing fields
    // Dispatches inquirySubmit action
    actions.inquirySubmit(name, subject, message, this.history);
    console.log('inquiry submitted!');
  };

  renderContent = () => {
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

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ inquirer }) => {
  return { isValidCompany: inquirer.isValidCompany };
};

export default connect(mapStateToProps)(Inquiry);
