// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';
import OrderModal from './OrderModal';
import OrderStatus from './OrderStatus';

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
    this.props.loadSelectedRestaurant({ MenuSections: ['loading'] });
    // Retrieve current restaurant data.
    ApiService.getRestaurantData(this.props.match.params.id).then((res) => {
      this.props.loadSelectedRestaurant(res);
    });
  }

  toggleModal = (data, editOrder) => {
    // If item is being added to cart
    if (editOrder) {
      console.log('editing', this.state.modalData.RestaurantId)
      this.props.setRestaurant(this.state.modalData.RestaurantId);
      this.props.addToCart(this.state.modalData);
    } 
    // check if item is already in cart
    if (data !== null && this.props.state.customer.cart && this.props.state.customer.cart[data.id]) {
      data = this.props.state.customer.cart[data.id]
    }
    // Turn modal on by loading food data (if from correct restaurant). Turn modal off by loading 'null'
    if ( this.props.state.customer.restaurantId === 'undefined' || data === null || data.RestaurantId === this.props.state.customer.restaurantId) {
      this.setState({
        modalData: data,
      })
    }
  }
  
  handleModalChange = (key, value) => {
    const modalData = Object.assign(this.state.modalData);
    modalData[key] = value;
    this.setState({modalData});
  }

  render() {
    const data = this.props.state.customer.currentRestaurant;
    // If there is no restaurant data on redux state.
    if (!data || data === { MenuSections: ['loading'] }) {
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

    const orderStatus = !this.props.state.customer.cart || Object.keys(this.props.state.customer.cart).length === 0 ? null : <div>You have {Object.keys(this.props.state.customer.cart).length} item(s) in your cart.</div>

    return (
      <div className="Menu DebugComponentRed">
        <h3>Name: {data.name}</h3>
        <Link to='../order'>{orderStatus}</Link>
        {listSections}
        <OrderModal data={this.state.modalData} toggle={this.toggleModal} edit={this.handleModalChange}/>
      </div>
    );
  }
}

export default Menu;
