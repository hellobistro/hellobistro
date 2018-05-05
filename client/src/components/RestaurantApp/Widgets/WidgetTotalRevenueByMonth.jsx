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
    <div className="WidgetTotalRevenueByMonth widget widget-small">
      <div className="widget-header-icon mat-color-green"><i className="material-icons">attach_money</i></div>
      <div className="widget-header-text">Total Revenue Per Month (lifetime)</div>
      <Bar data={props.state.restaurant.analytics.totalRevenueByMonth.widgetData} options={myOptions} />
    </div>
  );
};

export default WidgetTotalRevenueByMonth;
