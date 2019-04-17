import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="chat">
      {props.messages}
      <div id="chat-box">
        <textarea
          ref={props.chatBoxRef}
          type="text"
          placeholder="Enter message..."
        />
        <i
          onClick={props.buttonTicketSendHandler}
          className="far fa-paper-plane button-send"
        />
      </div>
    </div>
  );
};
