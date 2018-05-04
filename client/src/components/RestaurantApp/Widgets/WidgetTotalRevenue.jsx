// Import dependencies
import React from "react";

// Import CSS
import "../../../styles/Widgets.css";

const WidgetTotalRevenue = props => {
  return (
    <div className="WidgetTotalRevenue widget widget-small">
      <div className="widget-header-icon mat-color-green">
        <i class="material-icons">attach_money</i>
      </div>
      <div className="widget-header-text">Total Revenue</div>
      <div className="section info">
        <span className="info-detail">
          $<span>
            {props.state.restaurant.analytics.totalRevenueLast30Days}
          </span>
        </span>{" "}
        <span className="info-label">Last 30 Days</span>
      </div>
      <div className="section info">
        <span className="info-detail">
          $<span>
            {props.state.restaurant.analytics.totalRevenueLast60Days}
          </span>
        </span>
        <span className="info-label">Last 60 Days</span>
      </div>
      <div className="section info">
        <span className="info-detail">
          $<span>{props.state.restaurant.analytics.totalRevenue}</span>
        </span>
        <span className="info-label">Lifetime</span>
      </div>
    </div>
  );
};

export default WidgetTotalRevenue;
