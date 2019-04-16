import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="dashboard">
       <h1>Dashboard</h1>
      <div className="ticket-previews">{props.ticketPreviews}</div>
    </div>
  );
};
