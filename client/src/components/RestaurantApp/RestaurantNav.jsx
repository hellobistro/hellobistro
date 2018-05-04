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
        <li><Link to="/restaurant/home/dashboard"><i className="material-icons">dashboard</i>Dashboard</Link></li>
        <li><Link to="/restaurant/home/menuManager"><i className="material-icons">restaurant_menu</i>Menu Manager</Link></li>
        <li><Link to="/restaurant/home/settings"><i className="material-icons">settings</i>Settings</Link></li>
        <li><Link to="/restaurant/home/promos"><i className="material-icons">event</i>Promos</Link></li>
        <li onClick={logout}><i className="material-icons">exit_to_app</i>Logout</li>
      </ul>
    </div>
  );
};

export default RestaurantNav;
