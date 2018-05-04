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
      <div className="widget-header-icon mat-color-orange"><i className="material-icons">people</i></div>
      <div className="widget-header-text">Total Revenue Per Day</div>
      <HorizontalBar data={props.state.restaurant.analytics.totalRevenueByDayOfWeek.widgetData} options={myOptions} />
    </div>
  );
};

export default WidgetTotalRevenueByDay;
