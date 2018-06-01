// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import ApiService from '../../services/ApiService';


// Import components
import { RestaurantContainer, RestaurantListContainer } from '../Containers';

// Import styles.
import '../../styles/CustomerFindRestaurants.css';

// FindRestaurants component

class FindRestaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getLocation();
  }

  handleClick = (id) => {
    this.props.history.push(`/customer/home/${id}/Menu`);
  };

  renderRestaurantList = () => {
    const restaurantList = this.props.state.customer.closestRestaurants.map(biz => (
      <div
        className="restaurant-snippet"
        key={biz.id}
        onClick={() => {
          this.handleClick(biz.id);
        }}
      >   
        <h3 >{biz.name}</h3>
        <div style={{'float': 'right'}}>{biz.distance.toFixed(2)} km away</div>
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
  
  getPosition = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  getLocation = () => {
      this.getPosition().then((res) => {
        this.props.setCustomerLocation(res.coords.latitude, res.coords.longitude);
      })
      .then(() => {
        this.closestRestaurants() 
      })
  }

  closestRestaurants = () => {
    const { latitude, longitude } = JSON.parse(window.localStorage.state).customer.location
    ApiService.getRestaurantList(latitude, longitude).then(res => {
      this.props.loadClosestRestaurantList(res)
    })
  }
  
  render() {
    return (
      <div className="FindRestaurants">
        <h2 id="header">What restaurant would you like to check in to?</h2>
        {!this.props.state.customer.closestRestaurants ? <div><p id="sub-header">Searching for restaurants in your area...</p><div className="customer-loader" /></div> : <div><p id="sub-header">We&#39;ve located the following restaurants in your area:</p> {this.renderRestaurantList()}</div>}
      </div>
    );
  }
};
export default FindRestaurants;
