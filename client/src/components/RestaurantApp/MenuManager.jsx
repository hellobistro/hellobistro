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

  componentDidMount() {
    let restaurantId = JSON.parse(window.localStorage.state).restaurant.data.id
    ApiService.getRestaurantDataByUser(restaurantId).then((info) => {
      console.log('the info:   ', {...info})
        this.setState({ ...info })
      })
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
    //remove menuItems to be deleted and drafts to published
    for(let i = 0; i < menuSections.length; i++) {
      for(let j = 0; j < menuSections[i].MenuItems.length; j++){
        if(menuSections[i].MenuItems[j].status === 'delete'){
          menuSections[i].MenuItems.splice(j, 1);
        } else if(menuSections[i].MenuItems[j].status === 'draft'){
          menuSections[i].MenuItems[j].status = 'published';
        }
      }
    }

    ApiService.removeOldMenu(this.state.id)
      .then(() => {
        Promise.all(menuSections.map((section) => {
          return (ApiService.addNewMenuSection(this.state.id, section.name, section.description)
            .then(async (newSection) => {
              newSection = await newSection.json()
              console.log('the newly created section', newSection)
              Promise.all(section.MenuItems.map((item)=>{
                return ApiService.addNewMenuItem(this.state.id, item.name, item.price, item.vegan, item.vegetarian, 
                  item.glutenFree, item.spicy, item.image, item.prepTime, item.rating, newSection.id)
              }))
            }))
        }))
        .then(()=>{
          console.log(' succesfully added menu sectionnnnnnss')
          this.props.history.replace('/restaurant/home/dashboard');
        }).catch(err =>{
          console.log('error adding new menu', err)
        })
      }). catch(err => {
        console.log('failled to delete old menu', err)
      })
  }

  render() {
    console.log('the state inside menuManager#####', this.state)
    if(this.state.MenuSections){
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
   } else {
     return <p>loading ...</p>
   }
  }
}

export default MenuManager;
