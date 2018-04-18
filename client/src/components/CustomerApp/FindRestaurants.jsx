// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import RestaurantListContainer from '../Containers';
import RestaurantContainer from '../Containers';

// FindRestaurants component
// Used by Customers to log into app
const FindRestaurants = () => (
  <div className="FindRestaurants DebugComponentRed">
    <p>This is the <strong>FindRestaurants</strong> component</p>
    <p>Fix it so it is rendered at <code>/restaurants</code></p>
    <Route path="/" component={RestaurantListContainer} />
    <Route path="/" component={RestaurantContainer} />
  </div>
);

export default FindRestaurants;
