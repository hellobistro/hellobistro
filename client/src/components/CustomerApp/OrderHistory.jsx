// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import OrderHistoryItem from './OrderHistoryItem';
import OrderHistoryCompleted from './OrderHistoryCompleted';
// Import style
import '../../styles/CustomerOrderHistory.css';

// Order component
class OrderHistory extends React.Component {
  componentDidMount(props) {
    ApiService.retrieveOrders(this.props.state.user.userId)
      .then((res) => {
        this.props.loadOrders(res);
      });
  }

  render() {
    const { orders } = this.props.state.customer;

    if (!orders || !Array.isArray(orders)) {
      return (
        <div className="customer-loader" />
      );
    }

    const openOrders = orders.filter(order => order.status === 'queued');
    const openRender = openOrders.map(order => <OrderHistoryItem key={order.id} data={order} />);
    const closedOrders = orders.filter(order => order.status === 'completed');
    const closedRender = closedOrders.map(order => <OrderHistoryCompleted key={order.id} data={order} key={order.id} />);

    return (
      <div className="order-history">
        <div className="open">
          <h2 className="header">Your orders.</h2>
          <h3 className="history-sub-header">Currently open:</h3>
          {openRender}
        </div>
        <div className="completed">
          <h3 className="history-sub-header">Completed orders:</h3>
          <table className="completed-history-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Date</th>
                <th>Restaurant</th>
                <th>Bill</th>
              </tr>
            </thead>
            <tbody>
              {closedRender}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OrderHistory;
