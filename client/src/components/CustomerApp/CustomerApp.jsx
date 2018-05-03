// Import dependencies
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { CustomerLoginContainer } from '../Containers';
import { FindRestaurantsContainer } from '../Containers';
import { OrdersContainer } from '../Containers';
import { CustomerOrder } from '../Containers';
import { CustomerRegisterContainer } from '../Containers';
import { CustomerSettingsContainer } from '../Containers';
import AuthService from '../../services/AuthService';
import ApiService from '../../services/CustomerApiService';


// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();    
    this.state = {};
  }

  componentDidMount() {
    if (typeof this.props.state.customer.restaurants === 'undefined') {
      ApiService.findRestaurants().then((res) => {
        this.props.loadRestaurantList(res);
      });
    }
  }

  logout() {
    this.Auth.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="CustomerApp DebugComponentRed">
        <p>This is the <strong>CustomerApp</strong> component</p>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <p>Remaining components to implement under CustomerApp:</p>
        <ul>
          <li><Link to='/customer/findRestaurants'>Find Restaurants</Link></li>
          <li><Link to='/customer/order'>Your Cart</Link></li>
          <li><Link to='/customer/history'>Your Orders</Link></li>
          <li><Link to='/customer/settings'>Settings</Link></li>
        </ul>
      </div>
    );
  }
}

export default CustomerApp;
