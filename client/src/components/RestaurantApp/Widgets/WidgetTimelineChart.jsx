// Import dependencies
import React from 'react';
import { Line } from 'react-chartjs-2';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTimelineChart = (props) => {
  const renderChart = () => (!props.state.restaurant.analytics.timeline ? 'loading...'
    : (<Line
      data={props.state.restaurant.analytics.timeline.widgetData}
      options={{ responsive: true }}
      legend={{ display: true }}
    />));

  return (
    <div className="WidgetTotalRevenueByMonth widget widget-medium">
      <div className="widget-header-icon mat-color-green">
        <i className="material-icons">timeline</i>
      </div>
      <div className="widget-header-text">
        Timeline
      </div>
      <div className="section-chart">
        {renderChart()}
      </div>
    </div>
  );
};

export default WidgetTimelineChart;
