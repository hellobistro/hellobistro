// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Import components
import { RestaurantContainer, RestaurantListContainer } from '../Containers';

// Import styles.
import '../../styles/CustomerFindRestaurants.css';

// FindRestaurants component

const FindRestaurants = (props) => {
  const handleClick = (id) => {
    props.history.push(`/customer/home/${id}/Menu`);
  };

  const renderRestaurantList = () => {
    const restaurantList = props.state.customer.restaurants.map(biz => (
      <div
        className="restaurant-snippet"
        key={biz.id}
        onClick={() => {
          handleClick(biz.id);
        }}
      >
        <h3>{biz.name}</h3>
        <p>
          {biz.genre} - {biz.type}
        </p>
        <p>
          Location: {biz.addressOne}, {biz.addressTwo
            ? `${biz.addressTwo}, `
            : null}
          {biz.city}, {biz.state}, {biz.zip}
        </p>
        <p>Contact: {biz.phone}</p>
      </div>
    ));

    return restaurantList;
  };

  return (
    <div className="FindRestaurants">
      <h2 id="header">What restaurant would you like to check in to?</h2>
      <p id="sub-header">We&#39;ve located the following restaurants in your area:</p>
      {!props.state.customer.restaurants ? <div className="customer-loader" /> : renderRestaurantList()}
    </div>
  );
};
export default FindRestaurants;
