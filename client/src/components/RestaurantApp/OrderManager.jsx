// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
const moment = require("moment");

class OrderManager extends React.Component {
  constructor() {
    super();
    this.state = {
      change: false
    };
  }

  closeOrder = (id) => {
    let now = moment(Date.now());
    console.log(now)
    ApiService.completeOpenOrder(id, now)
      .then((res) => {
        return res.json()
      }).then((res) => {
        this.setState({change: true})
      }).catch(err => {
        console.log('error completing order', err)
      })
  }

  componentDidMount(){
    let restaurantId = JSON.parse(window.localStorage.state).restaurant.restaurantInfo.id
    ApiService.getOpenOrdersForRestaurant(restaurantId)
      .then((res) => {
        return res.json();
      }).then((openOrders) => {
        this.setState({ openOrders })
      })
      .catch(err => {
        console.log('error getting orders>>  ', err)
      })
  }


  render() {
    console.log('the state inside ordermManager', this.state.openOrders)
    return (
      this.state.openOrders
      ? (<div className="">
      <h3>Current Open Orders:</h3>
      {
        this.state.openOrders.map((order) => (
          <div className="open-order">
            <p>Order Number: {order.id}</p>
            <button className="complete-open-order" onClick={() => this.closeOrder(order.id)}>Complete Order</button>
            <p>Quantity: {order.MenuItems.length}</p>
          {order.MenuItems.map((item) => 
            <div className="open-order-item">
            <div>Item name: {item.name}</div>
            <div>Special Request: {item.OrderItem.special}</div>
            </div>
          )}
          </div>
        ))
      }
      </div>)
      : <div>Loading...</div>
    );
   }
}

export default OrderManager;
