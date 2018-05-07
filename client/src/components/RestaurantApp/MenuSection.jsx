import React from 'react';
import MenuItem from './MenuItem';

class MenuSection extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props !== nextProps);
  }

  render() {
    const { data, deleteMenuSection, inputChange, sectionIndex, dropDown, addItem, sectionChange } = this.props;
    const items = data.MenuItems.map((item, i) =>  (<MenuItem key={i} sectionIndex={sectionIndex} itemIndex={i} data={item} inputChange={inputChange} dropDown={dropDown} />));
    return (
      <div className="form-section">
        <input
          className="form-input section-name"
          name="name"
          type="text"
          placeholder="Add your menu section name here."
          defaultValue={data.name}
          maxLength="255"
          onChange={(e) => { sectionChange(sectionIndex, e); }}
        />
        <br />
        <textarea
          className="form-input section-description"
          name="form-description"
          type="text"
          defaultValue={data.description}
          placeholder="Add a section description here (not required)."
          maxLength="255"
          rows="1"
          onChange={(e) => { sectionChange(sectionIndex, e); }}
        />
        {/* <button onClick={()=>deleteMenuSection(sectionIndex)}>Delete Menu Section</button> */}
        {items}
        <button onClick={() => addItem(sectionIndex)}>Add item</button>
      </div>
    );
  }
};

export default MenuSection;
