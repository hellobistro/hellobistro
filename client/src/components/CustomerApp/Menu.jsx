// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';
import OrderModal from './OrderModal';

// Menu component
// Populated with menu specific to a restaurant
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: null,
    };
  }

  componentDidMount() {
    // Clear prior restaurant data.
    this.props.loadSelectedRestaurant({ MenuSections: [] });
    // Retrieve current restaurant data.
    ApiService.getRestaurantData(this.props.match.params.id).then((res) => {
      console.log('Data returned from API', res)
      this.props.loadSelectedRestaurant(res);
    });
  }

  toggleModal = (foodItem, confirmed) => {
    if (confirmed) {
      this.props.addToCart(this.state.modalData)
    } 
    this.setState({
      modalData: foodItem,
    })
  }

  render() {
    const data = this.props.state.customer.currentRestaurant;

    // If there is no restaurant data on redux state.
    if (data === { MenuSections: [] }) {
      return (<h1>Loading...</h1>);
    }

    // If there are no menu sections    
    if (!data || data.MenuSections.length === 0) {
      return (
        <div>
          <h3>Name: {data.name}</h3>
          <p>Sorry, this menu is unavailable</p>
        </div>
      );
    }

    // Regular render
    const listSections = data.MenuSections.map(section =>
      <MenuSection key={section.id} data={section} toggleModal={this.toggleModal}/>);

    return (
      <div className="Menu DebugComponentRed">
        <h3>Name: {data.name}</h3>
        {listSections}
        <OrderModal data={this.state.modalData} toggle={this.toggleModal}/>
      </div>
    );
  }
}

export default Menu;
