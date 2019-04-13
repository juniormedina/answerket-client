import React from 'react';
import './index.scss';

export default props => {
  return (
    <div
      id="notification-box"
      className={`nb-${props.notificationType}`}
      ref={props.notificationBoxRef}
    >
      <span>{props.message}</span>
    </div>
  );
};
