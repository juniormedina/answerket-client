import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="inquiry-confirmation">
      <h1>Inquiry has been submitted.</h1>
      Bookmark or store the following link to be able to follow up with your
      inquiry.
      <div id="confirmation-url" onClick={props.confirmationURLonClickHandler}>
        {props.confirmationURL ||
          'There was an error getting the confirmation url. Please try again later.'}
      </div>
    </div>
  );
};
