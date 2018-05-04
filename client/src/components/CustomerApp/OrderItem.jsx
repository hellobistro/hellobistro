import React from 'react';

const OrderItem = ({ data, toggle }) => (
  <div className="order-item" onClick={() => {toggle(data)}}>
    <p>{data.name} - Quantity: {data.quantity}</p>
    <p>Unit price: ${data.price.toFixed(2)} Total price: ${(data.price * data.quantity).toFixed(2)}</p>
    {!data.special ? null : <p>Special requests: {data.special}</p>}
  </div>
);

export default OrderItem;
