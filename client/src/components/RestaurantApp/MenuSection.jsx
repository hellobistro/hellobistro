import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ data, deleteMenuSection, inputChange, sectionIndex, dropDown, addItem}) => {
  
  const items = data.MenuItems.map((item, i) => {
    return <MenuItem key={i} sectionIndex={sectionIndex} itemIndex={i} 
            data={item} inputChange={inputChange} dropDown={dropDown} />});
  
  return (
    <div className="menu-section form-section">
      <div className="form-section-header">{data.name}</div> 
      <button onClick={deleteMenuSection}>Delete Menu Section</button>
      {items}
      <button onClick={()=>addItem(sectionIndex)}>Add item</button>
    </div>
  );
};

export default MenuSection;
