import React from 'react';

const MenuItem = ({ data, toggleModal }) => {
  const price = data.price.toFixed(2);
  return (
    <div className="customer-menu-item">
      <h3>- {data.name}</h3>
      <p>${price}</p>
      <p>Description: {data.description}</p>
      <button onClick={() => { toggleModal(data, false); }}>Order</button>
    </div>
  );
};

export default MenuItem;
