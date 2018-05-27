import React from 'react';

const renderItems = list => list.map(item => <li key={item.id}>{item.name}</li>);
// const consoleWait = list => console.log('List', list[0].prepTime);
const renderWait = list => list.reduce((a, b) => a.prepTime + b.prepTime, { prepTime: 0 });

const OrderHistoryItem = ({ data }) => (
  <div className="order-history-item">
    <p><strong>Order at {data.Restaurant.name}</strong></p>
    <p><strong>Status:</strong> {data.status}</p>
    <p><strong>Estimated wait:</strong> {renderWait(data.MenuItems)} minutes</p>
    <p><strong>Price paid:</strong> ${data.total.toFixed(2)}</p>
    <p><strong>Items ordered:</strong></p>
    <ul>{renderItems(data.MenuItems)}</ul>
  </div>
);

export default OrderHistoryItem;
