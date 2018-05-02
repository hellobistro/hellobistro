// Import dependencies

import React from 'react';
import { Route } from 'react-router-dom';

// Import components

import { RestaurantContainer, RestaurantListContainer } from '../Containers';

// FindRestaurants component

const FindRestaurants = (props) => {

  const handleClick = (id) => {
    props.history.push(`/customer/${id}/Menu`);
  };

  const restaurantList = props.state.customer.restaurants.map(biz =>
    (
      <div className="restaurant-snippet" key={biz.id} onClick={() => {handleClick(biz.id)}} >
        <h3>{biz.name}</h3>
        <p>{biz.genre} - {biz.type}</p>
        <p>Location: {biz.addressOne}, {biz.addressTwo}, {biz.city}, {biz.state}, {biz.zip}</p>
        <p>Contact: {biz.phone}</p>
      </div>
    ));

  return (
    <div className="FindRestaurants DebugComponentRed">
      <h2>What restaurant would you like to check in to?</h2>
      <p>We&#39;ve located the following restaurants in your area:</p>
      {restaurantList}
      <Route path="/" component={RestaurantListContainer} />
      <Route path="/" component={RestaurantContainer} />
    </div>
  );
};
export default FindRestaurants;
