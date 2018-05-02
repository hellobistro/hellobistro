// Import dependencies
import React from 'react';
import MenuSection from './MenuSection';
import { sampleRestaurantGet } from '../../../sampleData';

class MenuManager extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    //api call
    //sampleRestaurantGet//obj
    this.setState({ ...sampleRestaurantGet })
  }

  deleteMenuSection = (index) => {
    let newMenuSections = this.state.MenuSections;
    newMenuSections.splice(index, 1);
    this.setState({MenuSections: newMenuSections});
  }

  inputChange = (sectionIndex, itemIndex, e) => {
    let menuSections = this.state.MenuSections;
    let name = e.target.name;
    let value;
    if (name === "name" || name === "status") {
      value = e.target.value
    } else if(typeof JSON.parse(e.target.value) === "number" || typeof JSON.parse(e.target.value) === "boolean") {
      value = JSON.parse(e.target.value)
    } else {
      value = null;
    }
    menuSections[sectionIndex].MenuItems[itemIndex][name] = value;
    if (name !== "status"){
      menuSections[sectionIndex].MenuItems[itemIndex].status = "draft";
    }
    this.setState({
      MenuSections: menuSections
    })
  }

  addItem = (sectionIndex) => {
    let itemTemplate = {
      name: null,
      price: null,
      vegan: null,
      vegetarian: null,
      glutenFree: null,
      spicy: null,
      prepTime: null
    }
    let newMenuSections = this.state.MenuSections
    newMenuSections[sectionIndex].MenuItems.push(itemTemplate)
    this.setState({MenuSections: newMenuSections});
  }
  
  clickSave(){
    
  }

  render() {
    console.log('the state inside menuManager#####', this.state)
    const menuSections = sampleRestaurantGet.MenuSections.map((section, i) => 
    <MenuSection key={i} sectionIndex={i} data={section} dropDown={this.dropDown} 
      inputChange={this.inputChange} deleteMenuSection={this.deleteMenuSection} 
      addItem={this.addItem} />);
    return (
      <div className="MenuManager form">
        {menuSections}
        <button>Add item</button><button onClick={this.clickSave}>Save Changes</button>
        <button>Add a menu section</button>
      </div>
    );
  }
}

export default MenuManager;
