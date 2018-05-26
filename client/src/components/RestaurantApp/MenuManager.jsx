// Import dependencies
import React from 'react';
import MenuSection from './MenuSection';
import ApiService from '../../services/ApiService';

class MenuManager extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let restaurantId = JSON.parse(window.localStorage.state).restaurant.restaurantInfo.id
    ApiService.getRestaurantData(restaurantId).then((info) => {
      console.log('the info:   ', {...info})
        info.MenuSections = info.MenuSections.map((sec, i)=>{
          sec.uniqueId = new Date().getTime() + i;
          return sec
        })
        this.setState({ ...info })
      })
  }

  addSection = () => {
    let MenuSections = this.state.MenuSections;
    MenuSections.push({
      MenuItems: [],
      RestaurantId: this.state.id,
      uniqueId: new Date().getTime() + MenuSections.length,
    });
    this.setState({ MenuSections });
  }

  deleteSection = (indx) => {
    let MenuSections = Array.slice(this.state.MenuSections);
    let oldSection = MenuSections.splice(indx, 1);
    console.log('the oldSection:  ', oldSection)
    this.setState({ MenuSections }, () => {
      if(oldSection[0].hasOwnProperty('id')) {
        ApiService.deleteMenuSection(oldSection[0].id)
      } else { 
        console.log('this menusection is not in the database')
      }
    });
  }

  render() {
  console.log('the state inside MenuManager:  ', this.state)
  if(this.state.MenuSections){
    return (
      <div className="MenuManager form">
        <div className="page-header">
          <p>
          Manage the menu for <strong>{this.props.state.restaurant.restaurantInfo.name}</strong>:
          </p>
        </div>
        {this.state.MenuSections.map((section, i) => {
        return <MenuSection key={section.uniqueId} indx={i} data={section} deleteSection={this.deleteSection} />})}
        <button className="section-button" onClick={this.addSection}><i className="material-icons section-button-icon">label_important</i>Create a New Menu Section</button>
      </div>
    );
   } else {
     return <div className='restaurant-loader'></div>
   }
  }
}

export default MenuManager;
