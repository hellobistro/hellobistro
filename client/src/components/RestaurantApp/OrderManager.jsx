// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';

class OrderManager extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(){
    let restaurantId = JSON.parse(window.localStorage.state).restaurant.restaurantInfo.id
    ApiService.getOpenOrdersForRestaurant(restaurantId)
      .then((res) => {
        return res.json();
      }).then((res) => {
        console.log('the ressss', res)
      })
      .catch(err => {
        console.log('error getting orders>>  ', err)
      })
  }



  render() {
    console.log('the state inside ordermManager', this.state)
    return (
      this.state.openOrders
      ? (<div className="">
        Here are your open orders:
      </div>)
      : <div>you have no open orders</div>
    );
   }
}

export default OrderManager;
