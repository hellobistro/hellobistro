import React from 'react';

const OrderModal = ({data, toggle}) => {
  if (data === null) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="order-modal">
        <h3>{data.name}</h3>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" defaultValue="1"/>
        <p>${data.price}</p>
        <textarea placeholder="Special requests..." />
        <button onClick={() => {toggle(null, true)}} >Order</button>
        <button onClick={() => {toggle(null, false)}} >Cancel item</button>
      </div>
    </div>
  );
};

export default OrderModal;
