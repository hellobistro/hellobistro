// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import RestaurantList from './RestaurantList';
import Restaurant from './Restaurant';

// FindRestaurants component
// Used by Customers to log into app
const FindRestaurants = () => (
  <div className="FindRestaurants DebugComponentRed">
    <p>This is the <strong>FindRestaurants</strong> component</p>
    <p>Fix it so it is rendered at <code>/restaurants</code></p>
    <Route path="/" component={RestaurantList} />
    <Route path="/" component={Restaurant} />
  </div>
);

export default FindRestaurants;
