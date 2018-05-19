import React from 'react';
import '../../styles/Modals.css';

const WidgetModal = (props) => {
  const { data } = props.state.modals;
  console.log('widgetmodal data', data)
  return (
    <div className="widget-modal">
      Widget Modal
      <button onClick={props.modalOff} >Modal off</button>
    </div>
  );
};

export default WidgetModal;
