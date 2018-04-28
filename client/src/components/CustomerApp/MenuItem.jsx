import React from 'react';

const MenuItem = (data) => {
  return (
    <div className="customer-menu-item">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default MenuItem;
