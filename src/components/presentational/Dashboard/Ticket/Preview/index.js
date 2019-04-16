import React from 'react';
import './index.scss';

export default props => {
  if (props.number) {
    return (
      <div className="ticket-preview" onClick={props.onClick}>
        <div
          className={`ticket-preview-left ticket-preview-status-${getTicketColor(
            props.status
          )}`}
        >
          <div className="ticket-preview-number">#{props.number}</div>
          <div className="ticket-preview-date">{props.date}</div>
          <div className="ticket-preview-time">{props.time}</div>
          <div />
        </div>
        <div className="ticket-preview-right">
          <div className="ticket-preview-inquirer">{props.inquirer}</div>
          <div className="ticket-preview-subject">{props.subject}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ticket-preview-default">
        <h2>You have no available tickets</h2>
        <p>This can be a good thing.</p>
      </div>
    );
  }
};

const getTicketColor = status => {
  switch (status) {
    case 0:
      return 'new';
    case 1:
      return 'waiting';
    case 2:
      return 'updated';
    case 3:
      return 'closed';
    default:
      return '';
  }
};
