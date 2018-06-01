// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import OrderTimer from './OrderTimer'
import moment from "moment";

class OrderManager extends React.Component {
  constructor() {
    super();
  }

  closeOrder = (orderId, customerId) => {
    console.log('closing order');
    ApiService.completeOpenOrder(orderId, customerId)
      .then((res) => {
        this.getOpenOrders();
      }).catch(err => {
        console.log('error completing order', err)
      })
  }

  getOpenOrders = () => {
    let restaurantId = JSON.parse(window.localStorage.state).restaurant.restaurantInfo.id
    ApiService.getOpenOrdersForRestaurant(restaurantId)
      .then((openOrders) => {
        this.setState({ openOrders })
      })
      .catch(err => {
        console.log('error getting orders>>  ', err)
      })
  }

  componentDidMount(){
    this.getOpenOrders();
  }

  render() {
    return (
      this.state
      ? (<div className="">
      <div className="page-header"><strong>Open Orders:</strong></div>
      {
        this.state.openOrders.map((order, i) => {
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
      : <div className='restaurant-loader'></div>
    );
   }
}

export default OrderManager;
