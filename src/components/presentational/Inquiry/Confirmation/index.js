import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="inquiry-confirmation">
      <h1>Inquiry has been submitted.</h1>
      Bookmark or store the following link to be able to follow up with your
      inquiry.
      <div id="confirmation-url" onClick={e => props.confirmationURLonClickHandler(e)}>
        <span ref={props.confirmationURLRef}>
          {window.location.href + '/' + props.confirmationURL}
        </span>
      </div>
    </div>
  );
};
