// Import dependencies
import React from 'react';
import MenuSection from './MenuSection';
import { sampleRestaurantGet } from '../../../sampleData';

class MenuManager extends React.Component {
  constructor() {
    super();
    this.state = {
      editItem: false,
      data: sampleRestaurantGet,
    };
  }

  render() {
    const menuSections = this.state.data.MenuSections.map(section => <MenuSection data={section} />);

    return (
      <div className="MenuManager DebugComponentBlue">
        <p>This is the <strong>Menu Manager</strong> component</p>
        {menuSections}
        <button>Add item</button><button>Publish all</button>
      </div>
    );
  }
}

export default MenuManager;
