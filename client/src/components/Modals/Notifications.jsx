import React from 'react';
import '../../styles/Modals.css';

const Notifications = (props) => {
  if (props.state.ui.notifications.length === 0) {
    return null;
  }
  console.log('notifications up and running');

  return (
    <div className="notifications">
      Order is ready.
    </div>
  );
};

export default Notifications;
