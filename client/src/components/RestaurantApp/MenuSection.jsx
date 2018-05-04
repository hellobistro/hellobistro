import React from 'react';
import MenuItem from './MenuItem';

class MenuSection extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props !== nextProps);
  }

  render(){
    const { data, deleteMenuSection, inputChange, sectionIndex, dropDown, addItem, sectionChange } = this.props;
    const items = data.MenuItems.map((item, i) => {
      return <MenuItem key={i} sectionIndex={sectionIndex} itemIndex={i} 
              data={item} inputChange={inputChange} dropDown={dropDown} />});   
    return (
      <div className="menu-section form-section">
        <input className="form-section-header"
          name="name"
          type="text"
          defaultValue={data.name}
          onChange={(e)=>{sectionChange(sectionIndex, e)}} />
           <br/>
        <textarea name="description" type="text"
          defaultValue={data.description}
          onChange={(e)=>{sectionChange(sectionIndex, e)}} />
        {/* <button onClick={()=>deleteMenuSection(sectionIndex)}>Delete Menu Section</button> */}
        {items}
        <button onClick={()=>addItem(sectionIndex)}>Add item</button>
      </div>
    );
  }
};

export default MenuSection;
