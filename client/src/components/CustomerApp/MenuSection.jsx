import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = (data) => {
  const items = data.MenuItems.map(item => <MenuItem data={item} />);
  return (
    <div className="menu-section">
      <h2>{data.name}</h2>
      {items}
    </div>
  );
};

export default MenuSection;
