import React from 'react';
import '../../styles/Modals.css';

const OrderModal = (props) => {
  const { data } = props.state.modals;

  return (
    <div className="order-modal">
      <h3>{data.name}</h3>
      <p>${data.price}</p>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" defaultValue={data.quantity} onBlur={(e) => { props.editCartItem(data.id, 'quantity', e.target.value); }} />
      </div>
      <div>
        <label htmlFor="special">Special requests:  </label>
        <textarea id="special" defaultValue={data.special} onBlur={(e) => { props.editCartItem(data.id, 'special', e.target.value); }} />
      </div>
      <button onClick={props.modalOff} >Add to Order</button>
      <button onClick={() => { props.deleteCartItem(data.id); props.modalOff(); }} >Cancel Item</button>
    </div>
  );
};

export default OrderModal;
