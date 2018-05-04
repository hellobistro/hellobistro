// Import dependencies
import React from 'react';

// Import Widget Components
import {
  WidgetTotalRevenueContainer,
  WidgetTotalCustomersContainer,
  WidgetTopCustomersOrdersContainer,
} from '../Containers';

// Import CSS
import '../../styles/DashBoard.css';

const DashBoard = props => (
  <div className="DashBoard">
    <div className="page-header">
      <p>
        Here is how <strong>{props.state.restaurant.restaurantInfo.name}</strong> is doing
        at-a-glance:
      </p>
    </div>

    <WidgetTotalRevenueContainer />
    <WidgetTopCustomersOrdersContainer />
    <WidgetTotalCustomersContainer />
  </div>
);

export default DashBoard;
