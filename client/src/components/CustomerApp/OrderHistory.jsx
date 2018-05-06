// Import dependencies
import React from 'react';
import ApiService from '../../services/CustomerApiService';
import OrderHistoryItem from './OrderHistoryItem';

// Order component
class OrderHistory extends React.Component {
  componentDidMount(props) {
    console.log('mounting component')
    ApiService.retrieveOrders(this.props.state.user.userId)
      .then((res) => {
        console.log('Order list recieved', res);
        this.props.loadOrders(res);
      });
  }

  render() {
    console.log('Redux state',this.props.state)
    const { orders } = this.props.state.customer;

    if (!orders || !Array.isArray(orders)) {
      return (
        <div className="loader" />
      );
    }

    const openOrders = orders.filter(order => order.status === 'queued');
    const openRender = openOrders.map(order => <OrderHistoryItem key={order.id} data={order} />);
    const closedOrders = orders.filter(order => order.status === 'completed');
    const closedRender = closedOrders.map(order => <OrderHistoryItem data={order} key={order.id} />);

    return (
      <div className="order-history">
        <div>
          <h2>Your orders.</h2>
          <h4>Currently open:</h4>
          {openRender}
        </div>
        <div>
          <h4>Completed orders:</h4>
          {closedRender}
        </div>
      </div>
    );
  }
}

export default OrderHistory;
