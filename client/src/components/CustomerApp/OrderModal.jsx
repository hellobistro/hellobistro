import React from 'react';

const OrderModal = ({data, toggle, edit}) => {
  if (data === null) {
    return null;
  }

  const quantity = data.quantity || 1;
  const special = data.special || '';

  return (
    <div className="modal-backdrop">
      <div className="order-modal">
        <h3>{data.name}</h3>
        <p>${data.price}</p>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => {edit('quantity', e.target.value); }} />
        </div>
        <div>
          <label htmlFor="special">Special requests:  </label>
          <textarea id="special" value={special} onChange={(e) => {edit('special', e.target.value); }} />
        </div>
        <button onClick={() => {toggle(null, true)}} >Order</button>
        <button onClick={() => {toggle(null, false)}} >Cancel item</button>
      </div>
    </div>
  );
};

export default OrderModal;
