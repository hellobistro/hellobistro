// Import dependencies
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import '../../styles/CustomerNav.css';

const CustomerNav = (props) => {
  const logout = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <div className="CustomerNav">
      <ul>
        <li><Link to="/customer/home/findRestaurants"><i className="material-icons">location_on</i>Find Restaurants</Link></li>
        <li><Link to="/customer/home/order"><i className="material-icons">list</i>Your Cart</Link></li>
        <li><Link to="/customer/home/history"><i className="material-icons">dashboard</i>Your Orders</Link></li>
        <li><Link to="/customer/home/payment"><i className="material-icons">credit_card</i>Payment Methods</Link></li>
        <li><Link to="/customer/home/settings"><i className="material-icons">settings</i>Settings</Link></li>
        <li onClick={logout}><i className="material-icons">exit_to_app</i>Logout</li>
      </ul>
    </div>
  );
};

export default CustomerNav;
