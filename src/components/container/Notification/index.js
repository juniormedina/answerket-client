import React, { Component } from 'react';
import { clearNotification } from '../../../actions';
import NotificationBox from '../../presentational/Notification/Box';
import { connect } from 'react-redux';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.notificationBoxRef = React.createRef();
  }

  render() {
    if (!this.props.notification.message) return null;
    // Animates and clears the notification box
    this.notificationBoxHandler();
    return (
      <NotificationBox
        message={this.props.notification.message}
        notificationType={this.getNotificationType()}
        notificationBoxRef={this.notificationBoxRef}
      />
    );
  }

  getNotificationType() {
    return this.props.notification.isSuccessful ? 'success' : 'error';
  }

  notificationBoxHandler = () => {
    setTimeout(() => {
      // Fades in the notification box
      this.notificationBoxRef.current.style.opacity = 1;
    }, 0);
    setTimeout(() => {
      // Fades out the notification box
      this.notificationBoxRef.current.style.opacity = 0;
      // Clears the notification
      setTimeout(() => {
        this.props.clearNotification();
      }, 1000);
    }, 4000);
  };
}

const mapStateToProps = ({ notification }) => ({ notification });

const mapDispatchToProps = dispatch => ({
  clearNotification: () => dispatch(clearNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
