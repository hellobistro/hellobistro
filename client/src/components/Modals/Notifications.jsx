import React from 'react';
import '../../styles/Modals.css';

const Notifications = (props) => {
  if (props.state.ui.notifications.length === 0) {
    return null;
  }
  console.log('notifications up and running');

  return (
    <div className="notifications">
      <i className="material-icons notify">restaurant</i><span className="notification-message">Your food is ready!</span><i className="material-icons notify-close" onClick={props.clearNotification}>close</i>
    </div>
  );
};

export default Notifications;
