// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';

// Menu component
// Populated with menu specific to a restaurant
class Menu extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', this.props);
  }

  componentDidMount() {
    if (!this.props.state.customer.currentRestaurant) {
      ApiService.getRestaurantData(this.props.match.params.id).then((res) => {
        this.props.loadSelectedRestaurant(res);
      });
    }
  }

  render() {
    if (!this.props.state.customer.currentRestaurant) {
      return (<h1>Loading...</h1>);
    }
    const data = this.props.state.customer.currentRestaurant;
    const sections = data.MenuSections.map(section => <MenuSection data={section} />);
    return (
      <div className="Menu DebugComponentRed">
        <h3>Name: {data.name}</h3>
        {sections}
      </div>
    );
  }
}

export default Menu;
