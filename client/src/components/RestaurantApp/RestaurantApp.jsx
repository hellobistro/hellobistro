// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import RestaurantLogin from './RestaurantLogin';

// Create parent application
class RestaurantApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RestaurantApp DebugComponentBlue">
        <p>This is the <strong>RestaurantApp</strong> component</p>
        <Route path="/" component={RestaurantLogin} />
        <p>Remaining components to implement under RestaurantApp:</p>
        <ul>
          <li>Register</li>
          <li>Dashboard</li>
          <li>MenuManager</li>
          <li>Settings</li>
          <li>Promos (?)</li>
        </ul>
      </div>
    );
  }
}

export default RestaurantApp;
