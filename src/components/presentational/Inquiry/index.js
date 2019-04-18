import React from 'react';
import InquiryForm from './Form';

import './index.scss';

export default props => {
    return (
        <div id="inquiry">
            <h1>{props.name} #{props.number}</h1>
            <InquiryForm 
            buttonInquirySubmitHandler={props.buttonInquirySubmitHandler} 
            inquiryNameRef={props.inquiryNameRef}
            inquirySubjectRef={props.inquirySubjectRef}
            inquiryMessageRef={props.inquiryMessageRef}
          />
        </div>
    )
}