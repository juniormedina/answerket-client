import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="inquiry-form">
    <h3>Please fill out the following fields to submit your inquiry.</h3>
      <div id="input-fields">
        <input ref={props.inquiryNameRef} type="text" placeholder="Name" />
        <input ref={props.inquirySubjectRef} type="text" placeholder="Subject" />
        <textarea ref={props.inquiryMessageRef} placeholder="Message"/>
      </div>
      <button onClick={props.buttonInquirySubmitHandler} className="button-inquiry-submit">Submit</button>
    </div>
  );
};
