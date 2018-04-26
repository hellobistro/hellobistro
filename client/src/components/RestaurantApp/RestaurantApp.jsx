// Import dependencies
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { RestaurantLoginContainer } from '../Containers';
import { DashBoardContainer } from '../Containers';
import { MenuManagerContainer } from '../Containers';
import { PromosContainer } from '../Containers';
import { RestaurantRegisterContainer } from '../Containers';
import { RestaurantSettingsContainer } from '../Containers';
import RestaurantUserRegister from './RestaurantUserRegister';
import AuthService from '../../services/AuthService';
// Create parent application
class RestaurantApp extends React.Component {
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
    return (
      <div className="RestaurantApp DebugComponentBlue">
        <p>This is the <strong>RestaurantApp</strong> component</p>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <p>Remaining components to implement under RestaurantApp:</p>
        <ul>
          <li><Link to='/restaurant/registerRestaurant'>Register a Restaurant</Link></li>
          <li><Link to='/restaurant/dashboard'>Dashboard</Link></li>
          <li><Link to='/restaurant/menuManager'>Menu Manager</Link></li>
          <li><Link to='/restaurant/settings'>Settings</Link></li>
          <li><Link to='/restaurant/promos'>Promos</Link></li>
        </ul>
      </div>
    );
  }
}

export default RestaurantApp;
