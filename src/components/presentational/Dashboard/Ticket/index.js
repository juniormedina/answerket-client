import React from 'react';
import Chat from './Chat';
import './index.scss';

export default props => {
  return (
    <div className="ticket">
      <div className="button-back" onClick={props.buttonBackHandler}>
        <i className="fas fa-long-arrow-alt-left" />
      </div>
      <h1>
        Ticket #{props.number}
        <i onClick={props.buttonTicketCloseHandler} className="fas fa-gavel button-ticket-close" />
      </h1>
      <span className="ticket-inquirer">{props.inquirer}</span>
      <span className="ticket-subject">{props.subject}</span>
      <Chat
        messages={props.messages}
        buttonTicketSendHandler={props.buttonTicketSendHandler}
        chatBoxRef={props.chatBoxRef}
      />
    </div>
  );
};
