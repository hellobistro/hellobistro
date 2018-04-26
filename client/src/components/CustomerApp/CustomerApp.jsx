// Import dependencies
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { CustomerLoginContainer } from '../Containers';
import { FindRestaurantsContainer } from '../Containers';
import { OrdersContainer } from '../Containers';
import { CustomerRegisterContainer } from '../Containers';
import { CustomerSettingsContainer } from '../Containers';
import AuthService from '../../services/AuthService';


// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();    
    this.state = {};
  }

  logout(){
    this.Auth.logout();
    this.props.history.replace('/');
  }

  render() {
    console.log('the props in customer App~~~', this.props)
    return (
      <div className="CustomerApp DebugComponentRed">
        <p>This is the <strong>CustomerApp</strong> component</p>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <p>Remaining components to implement under CustomerApp:</p>
        <ul>
          <li><Link to='/customer/findRestaurants'>Find Restaurants</Link></li>
          <li><Link to='/customer/orders'>Your Orders</Link></li>
          <li><Link to='/customer/settings'>Settings</Link></li>
        </ul>
      </div>
    );
  }
}

export default CustomerApp;
