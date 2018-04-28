import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ data }) => {
  if (!data.MenuItems || data.MenuItems.length === 0) {
    return (
    <div className="menu-section">
      <h2>{data.name}</h2>
      <p>This menu section is currently empty.</p>
    </div>
    );
  }

  const items = data.MenuItems.map(item => <MenuItem data={item} />);
  return (
    <div className="menu-section">
      <h2>{data.name}</h2>
      {items}
    </div>
  );
};

export default MenuSection;
