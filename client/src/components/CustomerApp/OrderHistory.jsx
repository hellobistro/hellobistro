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
    const { orders } = this.props.state.customer;

    if (!orders) {
      return (
        <div className="loader" />
      );
    }

    const openOrders = orders.filter(order => order.status === 'queued' || order.statusorder.status === 'prepping')
    console.log(openOrders);
    const openRender = openOrders.map(order => <OrderHistoryItem key={order.id} data={order} />);
    console.log(openRender);
    const closedOrders = orders.filter(order => order.status === 'complete').map(order => <OrderHistoryItem data={order} key={order.id} />);

    return (
      <div className="order-history">
        <div>
          <h4>Open Orders</h4>
          {openRender}
        </div>
        <div>
          <h4>Past Orders</h4>
          {closedOrders}
        </div>
      </div>
    );
  }
}

export default OrderHistory;
