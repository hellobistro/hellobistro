// Import dependencies
import React from 'react';

// Import CSS
import '../../../styles/Widgets.css';

const WidgetTopCustomersOrders = (props) => {
  let topFiveCustomersByOrders = props.state.restaurant.analytics.topFiveCustomersByOrders;

  return (
    <div className="WidgetTotalCustomers widget widget-small">
      <div className="widget-header-icon mat-color-orange"><i className="material-icons">people</i></div>
      <div className="widget-header-text">Top 5 Customers (Orders)</div>
      { topFiveCustomersByOrders.map((customer, index) => {
        if (index < 5) {
          return (
            <div className="section info" key={index}>
              <span className="info-detail">{customer.orders}</span>
              <span className="info-label">{customer.userName}</span>
            </div>
          );
        }
      })
    }

    </div>
  );
};

export default WidgetTopCustomersOrders;
