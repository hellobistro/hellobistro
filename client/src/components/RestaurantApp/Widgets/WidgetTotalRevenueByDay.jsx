// Import dependencies
import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTotalRevenueByDay = (props) => {
  const myOptions = {
    legend: {
        display: false,
    },
};
  return (
    <div className="WidgetTotalRevenueByDay widget widget-medium">
      <div className="widget-header-icon mat-color-green"><i className="material-icons">attach_money</i></div>
      <div className="widget-header-text">Total Revenue Per Day (lifetime)</div>
      <div className="section-chart">
      <HorizontalBar data={props.state.restaurant.analytics.totalRevenueByDayOfWeek.widgetData} options={myOptions} />
      
      </div>
    </div>
  );
};

export default WidgetTotalRevenueByDay;
