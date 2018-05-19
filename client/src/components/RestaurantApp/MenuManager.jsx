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
        // info.MenuSections = info.MenuSections.map((sec)=>{
        //   sec.uniqueTime = 0;
        //   return sec
        // })
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

  deleteSection = (indx) => {
    console.log('the indx:   ~~~ ', indx )
    let MenuSections = Array.slice(this.state.MenuSections);
    // console.log('the menuSection before splice', JSON.stringify(MenuSections))
    MenuSections.splice(indx, 1);
    // console.log('the menuSection after splice', JSON.stringify(MenuSections))
    this.setState({ MenuSections });
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
        return <MenuSection indx={i} data={section} deleteSection={this.deleteSection} />})}
        <button className="section-button" onClick={this.addSection}>Add a menu section</button>
      </div>
    );
   } else {
     return <div className='restaurant-loader'></div>
   }
  }
}

export default MenuManager;
