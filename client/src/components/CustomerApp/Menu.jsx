// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';

// Menu component
// Populated with menu specific to a restaurant
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ApiService.getRestaurantData(this.props.match.params.id).then((res) => {
      this.props.loadSelectedRestaurant(res);
    });
  }

  render() {
    const data = this.props.state.customer.currentRestaurant;

    // If there is no restaurant data on redux state.
    if (!data) {
      return (<h1>Loading...</h1>);
    }

    // If there are no menu sections    
    if (data.MenuSections.length === 0) {
      return (
        <div>
          <h3>Name: {data.name}</h3>
          <p>Sorry, this menu is unavailable</p>
        </div>
      );
    }

    // Regular render
    const listSections = data.MenuSections.map(section =>
      <MenuSection key={section.id} data={section} />);

    return (
      <div className="Menu DebugComponentRed">
        <h3>Name: {data.name}</h3>
        {listSections}
      </div>
    );
  }
}

export default Menu;
