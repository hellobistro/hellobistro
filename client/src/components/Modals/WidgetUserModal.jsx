import React from 'react';
import '../../styles/Modals.css';

const WidgetUserModal = (props) => {
  const { data } = props.state.modals;
  console.log('widgetmodal data', data);
  return (
    <div className="widget-user-modal">
      <div className="widget-user-modal-header" >
      Customer: {data}
      </div>
      <div className="widget-user-modal-content">
      Widget Modal
      <button onClick={props.modalOff} >Modal off</button>
      </div>
    </div>
  );
};

export default WidgetUserModal;
