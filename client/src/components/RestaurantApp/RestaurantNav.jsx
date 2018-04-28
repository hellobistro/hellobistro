// Import dependencies
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { clearLocalStorage } from '../../services/LocalStorage';

import '../../styles/RestaurantNav.css';

const RestaurantNav = (props) => {

  const logout = () => {
    
    localStorage.clear();
    props.history.push('/');
  }
  
  return (
    <div className="RestaurantNav">
      <ul>
        <li><Link to='/restaurant/home/dashboard'><i class="material-icons">dashboard</i>Dashboard</Link></li>
        <li><Link to='/restaurant/home/menuManager'><i class="material-icons">restaurant_menu</i>Menu Manager</Link></li>
        <li><Link to='/restaurant/home/settings'><i class="material-icons">settings</i>Settings</Link></li>
        <li><Link to='/restaurant/home/promos'><i class="material-icons">event</i>Promos</Link></li>
        <li onClick={logout}><i class="material-icons">exit_to_app</i>Logout</li>
      </ul>
    </div>
  );
};

export default RestaurantNav;
