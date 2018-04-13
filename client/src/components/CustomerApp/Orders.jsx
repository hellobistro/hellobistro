// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import Order from './Order';

// Order component
const Orders = () => (
  <div className="Orders DebugComponentRed">
    <p>This is the <strong>Orders</strong> component</p>
    <p>Fix it so it is rendered at <code>/orders</code></p>
    <Route path="/" component={Order} />
  </div>
);

export default Orders;
