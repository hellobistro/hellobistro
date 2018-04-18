// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import MenuContainer from '../Containers';

// Restaurant component
// Used by Customers to log into app
const Restaurant = () => (
  <div className="Restaurant DebugComponentRed">
    <p>This is the <strong>Restaurant</strong> component</p>
    <p>Fix it so it is rendered at <code>/restaurants/:restaurant_id</code></p>
    <Route path="/" component={MenuContainer} />
  </div>
);

export default Restaurant;
