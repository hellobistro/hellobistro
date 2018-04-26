// Import dependencies
import React from 'react';
import MenuSection from './MenuSection';
import { sampleRestaurantGet } from '../../../sampleData';
import MenuEditItem from './MenuEditItem';

class MenuManager extends React.Component {
  constructor() {
    super();
    this.state = {
      editItem: false,
    };
  }

  toggleEdit = (editData) => {
    this.setState({ 
      editItem: !this.state.editItem,
      editData,
    });
    console.log('toggled edit')
  }

  render() {
    const menuSections = this.props.state.restaurant.data.MenuSections.map(section => <MenuSection data={section} toggleEdit={this.toggleEdit}/>);

    return (
      <div className="MenuManager DebugComponentBlue">
        <p>This is the <strong>Menu Manager</strong> component</p>
        {menuSections}
        <button>Add item</button><button>Publish all</button>
        <MenuEditItem view={this.state.editItem} data={this.state.editData} toggleEdit={this.toggleEdit}/>
      </div>
    );
  }
}

export default MenuManager;
