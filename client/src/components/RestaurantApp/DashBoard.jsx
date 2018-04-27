// Import dependencies
import React from 'react';

// Import Widget Components
import WidgetTotalCustomers from './Widgets/WidgetTotalCustomers';
import WidgetTopCustomersOrders from './Widgets/WidgetTopCustomersOrders';
import WidgetTotalRevenue from './Widgets/WidgetTotalRevenue';

// Import CSS
import '../../styles/DashBoard.css';

const DashBoard = props => (
  <div className="DashBoard">
    <div className="page-header">
      <p>
        Hello, <strong>username</strong>.
      </p>
      <p>
        Here is how <strong>{props.state.restaurant.data.name}</strong> is doing
        at-a-glance:
      </p>
    </div>

    <WidgetTotalRevenue />
    <WidgetTotalCustomers />
    <WidgetTopCustomersOrders />

    <WidgetTotalRevenue />
    <WidgetTotalCustomers />
    <WidgetTopCustomersOrders />

    <WidgetTotalRevenue />
    <WidgetTotalCustomers />
    <WidgetTopCustomersOrders />
  </div>
);

export default DashBoard;
