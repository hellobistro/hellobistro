import React from 'react';
import { MenuItemContainer } from '../Containers';

const MenuSection = ({ data }) => {
  if (!data.MenuItems || data.MenuItems.length === 0) {
    return (
    <div className="menu-section">
      <h2 className="menu-section-name">{data.name}</h2>
      <p className="menu-section-subheader">This menu section is currently empty.</p>
    </div>
    );
  }

  const items = data.MenuItems.map(item => (item.status === 'published' ? <MenuItemContainer key={item.id} data={item} /> : null));
  return (
    <div className="menu-section">
      <h2 className="menu-section-name">{data.name}</h2>
      {items}
    </div>
  );
};

export default MenuSection;
