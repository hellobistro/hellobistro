// Import dependencies
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetItemOrderTotals = (props) => {
  return (
    <div className="WidgetTotalCustomers widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i className="material-icons">people</i></div>
      <div className="widget-header-text">Menu Item Orders</div>
      <Doughnut data={props.state.restaurant.analytics.itemOrderTotals.widgetData} />
    </div>
  );
};

export default WidgetItemOrderTotals;
