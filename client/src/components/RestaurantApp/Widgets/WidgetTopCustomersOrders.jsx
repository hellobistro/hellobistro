// Import dependencies
import React from 'react';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTopCustomers = (props) => {
  return (
    <div className="WidgetTotalCustomers widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i class="material-icons">people</i></div>
      <div className="widget-header-text">Top Customers (Orders)</div>
      <div className="section info">
        <span className="info-detail">122</span>
        <span className="info-label">yummykins22</span>
      </div>
      <div className="section info">
        <span className="info-detail">112</span>
        <span className="info-label">1cecr3amman</span>
      </div>
      <div className="section info">
        <span className="info-detail">91</span>
        <span className="info-label">wizardlizard</span>
      </div>
      <div className="section info">
        <span className="info-detail">88</span>
        <span className="info-label">luffyd</span>
      </div>
      <div className="section info">
        <span className="info-detail">82</span>
        <span className="info-label">hikkixyukino</span>
      </div>
    </div>
  );
};

export default WidgetTopCustomers;
