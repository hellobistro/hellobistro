// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import ConfirmOrder from './ConfirmOrder';
import OrderStatus from './OrderStatus';

// Order component
const Order = () => (
  <div className="Order DebugComponentRed">
    <p>This is the <strong>Order</strong> component</p>
    <p>Fix it so it is rendered at <code>/orders/:order_id</code></p>
    <Route path="/" component={ConfirmOrder} />
    <Route path="/" component={OrderStatus} />
  </div>
);

export default Order;
