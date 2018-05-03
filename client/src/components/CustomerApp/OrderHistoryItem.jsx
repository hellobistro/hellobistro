import React from 'react';

const renderItems = list => list.map(item => item.name); 

const OrderHistoryItem = ({ data }) => (
  <div className="order-history-item">
    <p><strong>Order at {data.Restaurant.name}</strong></p>
    <p><strong>Status:</strong> {data.status}</p>
    <p><strong>Estimated wait:</strong> {data.prepTime}</p>
    <p><strong>Price paid:</strong> ${data.total.toFixed(2)}</p>
    <p><strong>Items ordered:</strong> {JSON.stringify(renderItems(data.MenuItems))}</p>
  </div>
);

export default OrderHistoryItem;
