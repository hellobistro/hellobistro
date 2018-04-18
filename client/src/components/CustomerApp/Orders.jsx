// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import OrderContainer from '../Containers';

// Order component
const Orders = () => (
  <div className="Orders DebugComponentRed">
    <p>This is the <strong>Orders</strong> component</p>
    <p>Fix it so it is rendered at <code>/orders</code></p>
    <Route path="/" component={OrderContainer} />
  </div>
);

export default Orders;
