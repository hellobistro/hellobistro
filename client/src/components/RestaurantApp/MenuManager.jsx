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
        this.setState({ ...info })
      })
  }

  addSection = () => {
    let MenuSections = this.state.MenuSections;
    MenuSections.push({
      MenuItems: [],
      RestaurantId: this.state.id
    });
    this.setState({ MenuSections });
  }

  render() {
    console.log('the state inside MenuManager:  ', this.state)
    if(this.state.MenuSections){
    const menuSections = this.state.MenuSections.map((section, i) => 
    <MenuSection key={i} data={section} />);
    return (
      <div className="MenuManager form">
        <div className="page-header">
          <p>
          Manage the menu for <strong>{this.props.state.restaurant.restaurantInfo.name}</strong>:
          </p>
        </div>
        {menuSections}
        <button className="section-button" onClick={this.addSection}>Add a menu section</button>
      </div>
    );
   } else {
     return <div className='restaurant-loader'></div>
   }
  }
}

export default MenuManager;
