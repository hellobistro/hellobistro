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
      .then((openOrders) => {
        this.setState({openOrders: openOrders})
      })
  }



  render() {
    console.log('the state inside ordermManager', this.state)
    return (
      <div className="">
        hi
      </div>
    );
   }
}

export default OrderManager;
