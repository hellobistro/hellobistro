import React from 'react';

const renderItems = list => list.map(item => item.name); 

const OrderHistoryItem = ({ data }) => (
  <div className="order-history-item">
    <code>[Restaurant Name should go here?]</code>
    <p>Status: {data.status}</p>
    <p>Price paid: ${data.total.toFixed(2)}</p>
    <p>Items ordered: {JSON.stringify(renderItems(data.MenuItems))}</p>
  </div>
);

export default OrderHistoryItem;
