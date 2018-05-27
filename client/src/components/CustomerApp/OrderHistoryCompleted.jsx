import React from 'react';

const renderItems = list => list.map(item => <li>{item.name}</li>);

const OrderHistoryCompleted = ({ data }) => (
  <tr key={data.id}>
    <td>{data.id}</td>
    <td>{data.createdAt}</td>
    <td>{data.Restaurant.name}</td>
    <td>${data.total}</td>
  </tr>
);

export default OrderHistoryCompleted;
