// Import dependencies
import React from 'react';
import MenuSection from './MenuSection';
import { sampleRestaurantGet } from '../../../sampleData';
import ApiService from '../../services/ApiService';

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
    console.log("the menusection after splice", newMenuSections)
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

  sectionChange = (sectionIndex, e) => {
    let menuSections = this.state.MenuSections;
    let name = e.target.name
    let val = e.target.value
    menuSections[sectionIndex][name] = val
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

  addSection = () => {
    let sectionTemplate = {
      name: null,
      description: null,
      MenuItems: [],
    }
    let newMenuSections = this.state.MenuSections;
    newMenuSections.push(sectionTemplate)
    this.setState({MenuSections: newMenuSections})
  }
  
  clickSave = () => {
    let menuSections = this.state.MenuSections
    //remove menuItems to be deleted
    for(let i = 0; i < menuSections.length; i++) {
      for(let j = 0; j < menuSections[i].MenuItems.length; j++){
        if(menuSections[i].MenuItems[j].status === 'delete'){
          menuSections[i].MenuItems.splice(j, 1);
        }
      }
    }
    //remove all old menu
    ApiService.removeOldMenu(this.state.id)
      .then(() => {
        //add menu section
        this.state.MenuSections.map((section) => {
          return ApiService.addNewMenuSection(this.state.id, section.name, section.description);
        })
      }).then(() => {
        //add menu items
        let menuSections = this.state.MenuSections;
        for(let i = 0; i < menuSections.length; i++) {
          for(let j = 0; j < menuSections[i].MenuItems.length; j++){
            let { name, price, vegan, vegetarian, glutenFree, spicy, image, prepTime, rating } = menuSections[i].MenuItems[j]
            ApiService.addNewMenuItem(this.state.id, name, price, vegan, vegetarian, glutenFree, spicy, image, prepTime, rating)
          }
        }
      }).then(() => {
        console.log('successfully added new menu')
      }).catch(err => {
        console.log('error saving new menu', err)
      })
  }

  render() {
    console.log('the state inside menuManager#####', this.state)
    const menuSections = this.state.MenuSections.map((section, i) => 
    <MenuSection key={i} sectionIndex={i} data={section} 
      inputChange={this.inputChange} 
      deleteMenuSection={this.deleteMenuSection} 
      addItem={this.addItem} 
      sectionChange={this.sectionChange} />);
    return (
      <div className="MenuManager form">
        {menuSections}
        <button onClick={this.addSection}>Add a menu section</button>
        <button onClick={this.clickSave}>Save Changes</button>
      </div>
    );
  }
}

export default MenuManager;
