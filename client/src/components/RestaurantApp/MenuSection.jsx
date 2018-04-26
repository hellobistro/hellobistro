import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ data, toggleEdit }) => {
  
  const items = data.MenuItems.map(item => <MenuItem data={item} toggleEdit={toggleEdit} />);
  
  return (
    <div className="menu-section">
      <p>This is a <strong>Menu Section</strong> component</p>
      <h2>{data.name}</h2>
      {items}
    </div>
  );
};

export default MenuSection;
