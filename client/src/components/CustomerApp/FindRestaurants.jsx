// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import RestaurantListContainer from '../Containers';
import RestaurantContainer from '../Containers';

// FindRestaurants component

const FindRestaurants = (props) => {
  const restaurantList = props.state.customer.restaurants.map(biz =>
    (
      <div className="restaurant-snippet" key={biz.id}>
        <h3>{biz.name}</h3>
        <p>{biz.genre} - {biz.type}</p>
        <p>Location: {biz.addressOne}, {biz.addressTwo}, {biz.city}, {biz.state}, {biz.zip}</p>
        <p>Contact: {biz.phone}</p>
      </div>
    ));

  return (
    <div className="FindRestaurants DebugComponentRed">
    <p>This is the <strong>FindRestaurants</strong> component</p>
    {restaurantList}
    <Route path="/" component={RestaurantListContainer} />
    <Route path="/" component={RestaurantContainer} />
    </div>
  );
};
export default FindRestaurants;
