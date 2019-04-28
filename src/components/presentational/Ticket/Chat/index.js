import React from 'react';
import './index.scss';

export default props => {
  return (
    <div id="ticket">
        <h1>{props.companyName} #{props.companyNumber}</h1>
      <div id="chat">
        {props.messages}
        <div id="chat-box">
          <textarea
            ref={props.chatBoxRef}
            type="text"
            placeholder="Enter message..."
          />
          <i
            onClick={props.buttonChatSubmitHandler}
            className="far fa-paper-plane button-send"
          />
        </div>
      </div>
    </div>
  );
};
