// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';
import OrderModal from './OrderModal';
import OrderStatus from './OrderStatus';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: null,
    };
  }

  componentWillMount() {
    // Load restaurant data.
    if (!this.props.state.customer.currentRestaurant || JSON.stringify(this.props.state.customer.currentRestaurant.id) !== this.props.match.params.id) {
      // If new restaurant doesn't match prior restaurant, clear prior restaurant data.
      this.props.loadSelectedRestaurant({ MenuSections: ['loading'] });
      // Retrieve new restaurant data.
      ApiService.getRestaurantData(this.props.match.params.id).then((res) => {
        // Load new restaurant data into redux store.
        this.props.loadSelectedRestaurant(res);
      });
    } 
  }

  toggleModal = (data, editOrder) => {
    console.log('toggle modal', data, editOrder)
    // If item is being added to cart
    if (editOrder) {
      this.props.setRestaurant(this.state.modalData.RestaurantId);
      this.props.addToCart(this.state.modalData);
    } 
    // check if item is already in cart
    if (data !== null && this.props.state.customer.cart && this.props.state.customer.cart[data.id]) {
      data = this.props.state.customer.cart[data.id]
    }

    // make sure item has quantity attribute
    if (data !== null && !data.quantity) {
      data.quantity = 1;
    }

    // Turn modal on by loading food data (if from correct restaurant). Turn modal off by loading 'null'
    if ( !this.props.state.customer.restaurantId || this.props.state.customer.restaurantId === 'undefined' || data === null || data.RestaurantId === this.props.state.customer.restaurantId) {
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
    if (!data || data.MenuSections[0] === "loading") {
      console.log('loading loader')
      return (<div className="customer-loader"></div>);
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
