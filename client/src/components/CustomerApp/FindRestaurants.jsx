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

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  // const success = (pos) => {
  //   var crd = pos.coords;
  
  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  //   return { latitude: crd.latitude, longitutude: crd.longitude }
  // }
  
  // const error = (err) => {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }
  
  // const getLocation = () => {
  //   let apple = navigator.geolocation.getCurrentPosition(success, error, options)
  //   console.log('the apple: ', apple)
  // }
  
  const getPosition = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  const getLocation = () => {
      getPosition().then((res) => {
        props.setCustomerLocation(res.coords.latitude, res.coords.longitude);
      });
  }
  
  return (
    <div className="FindRestaurants">
    {
      getLocation()
    }
      <h2 id="header">What restaurant would you like to check in to?</h2>
      <p id="sub-header">We&#39;ve located the following restaurants in your area:</p>
      {!props.state.customer.restaurants ? <div className="customer-loader" /> : renderRestaurantList()}
    </div>
  );
};
export default FindRestaurants;
