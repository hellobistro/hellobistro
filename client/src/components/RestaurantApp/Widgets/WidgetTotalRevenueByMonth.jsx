// Import dependencies
import React from 'react';
import {Bar} from 'react-chartjs-2';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTotalRevenueByMonth = (props) => {
  const myOptions = {
    legend: {
        display: false,
    },
    responsive: true
};
  return (
    <div className="WidgetTotalRevenueByMonth widget widget-medium">
      <div className="widget-header-icon mat-color-orange"><i className="material-icons">people</i></div>
      <div className="widget-header-text">Total Revenue Per Month</div>
      <Bar data={props.state.restaurant.analytics.totalRevenueByMonth.widgetData} options={myOptions} />
    </div>
  );
};

export default WidgetTotalRevenueByMonth;
