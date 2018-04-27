// Import dependencies
import React from 'react';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTotalCustomers = (props) => {
  return (
    <div className="WidgetTotalCustomers widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i class="material-icons">people</i></div>
      <div className="widget-header-text">Total Customers</div>
      <div className="section info">
        <span className="info-detail">322</span>
        <span className="info-label">Unique</span>
      </div>
      <div className="section info">
        <span className="info-detail">132</span>
        <span className="info-label">Unique (Last 90 Days)</span>
      </div>
    </div>
  );
};

export default WidgetTotalCustomers;
