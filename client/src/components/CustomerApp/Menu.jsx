// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/ApiService';
import MenuSection from './MenuSection';
import OrderStatus from './OrderStatus';
// Import styles.
import '../../styles/CustomerMenu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: null,
    };
  }

  componentWillMount() {
    // Load restaurant data.
    if (JSON.stringify(this.props.state.customer.currentRestaurant.id) !== this.props.match.params.id) {
      // If new restaurant doesn't match prior restaurant, clear prior restaurant data.
      ApiService.getMenuData(this.props.match.params.id).then((res) => {
        // Load new restaurant data into redux store.
        this.props.loadSelectedRestaurant(res);
      });
    } 
  }

  render() {
    const data = this.props.state.customer.currentRestaurant;
    // If there is no restaurant data on redux state.
    if (!data || data.MenuSections[0] === "loading") {
      return (<div className="customer-loader"></div>);
    }
    // If there are no menu sections    
    if (data.MenuSections.length === 0) {
      return (
        <div>
          <h2 id="menu-rest-name">{data.name}</h2>
          <h4 id="menu-section-subheader">Sorry, this menu is unavailable.</h4>
        </div>
      );
    }
    // Regular render
    const listSections = data.MenuSections.map(section =>
      <MenuSection key={section.id} data={section} />);

    const orderStatus = Object.keys(this.props.state.customer.cart.items).length === 0 ? null : <div id="order-status">You have {Object.keys(this.props.state.customer.cart.items).length} item(s) in your cart.</div>
    const cartError = !this.props.state.customer.cart.restaurantId || this.props.state.customer.cart.restaurantId === this.props.state.customer.currentRestaurant.id ? null : <div id="existing-cart"><p><strong>You already have an order started at a different restaurant.<br /> Clear your cart to start an order at {this.props.state.customer.currentRestaurant.name}.</strong></p></div>;
 
    return (
      <div className="Menu DebugComponentRed">
        <h2 id="menu-rest-name">{data.name}</h2>
        <Link to='../order'>{orderStatus}</Link>
        {cartError}
        {listSections}
      </div>
    );
  }
}

export default Menu;
