// Import dependencies
import React from 'react';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTotalRevenue = (props) => {
  return (
    <div className="WidgetTotalRevenue widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i class="material-icons">people</i></div>
      <div className="widget-header-text">Revenue</div>
      <div className="section info">
        <span className="info-detail">$122,123</span>
        <span className="info-label">Cal. Year To Date</span>
      </div>
      <div className="section info">
        <span className="info-detail">$32,123</span>
        <span className="info-label">Last 3 months</span>
      </div>
      <div className="section info">
        <span className="info-detail">$1,321,022</span>
        <span className="info-label">Lifetime</span  >
      </div>
    </div>
  );
};

export default WidgetTotalRevenue;
