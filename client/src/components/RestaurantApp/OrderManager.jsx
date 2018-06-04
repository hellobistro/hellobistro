// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import SocketService from '../../services/SocketService';
import OrderTimer from './OrderTimer'
import moment from "moment";

class OrderManager extends React.Component {
  constructor(props) {
    super(props);
  }

  closeOrder = (orderId, customerId) => {
    const restaurantId = this.props.state.restaurant.restaurantInfo.id;
    SocketService.closeOrder(orderId, customerId, restaurantId)
    .catch((err) => {
      console.log('Error closing order', err)
    })
  }

  componentDidMount(){
    const restaurantId = this.props.state.restaurant.restaurantInfo.id;
    SocketService.refreshOpenRestaurantOrders(restaurantId);
  }

  render() {
    return (
      this.props.state.restaurant.data.openOrders.length > 0
      ? (<div className="">
      <div className="page-header"><strong>Open Orders:</strong></div>
      {
        this.props.state.restaurant.data.openOrders.map((order, i) => {
          return <div key={i} className="menu-manager-item item-input">
            <p>Order Number: {order.id}</p>
            <OrderTimer order={order}/>
            <button className="complete-open-order" onClick={() => this.closeOrder(order.id, order.CustomerId)}>Complete Order</button>
            <p>Quantity: {order.MenuItems.length}</p>
          {order.MenuItems.map((item, i) => 
            <div key={i} className="open-order-item">
            <div>Item name: {item.name}</div>
            <div>Special Request: <i>{item.OrderItem.special}</i></div>
            </div>
          )}
          </div>
        })
      }
      </div>)
      : <div><div className='restaurant-loader' />Waiting for new orders.</div>
    );
   }
}

export default OrderManager;
