// Import dependencies
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// Import components
import Mast from './Mast';
import CustomerNav from './CustomerNav';
import {
  FindRestaurantsContainer,
  FavoritesContainer,
  OrderHistoryContainer,
  OrderContainer,
  CustomerSettingsContainer,
  MenuContainer,
  ConfirmOrderContainer,
  CustomerModalsContainer,
  PaymentMethodsContainer,
  CustomerNavContainer,
} from '../Containers';
// Import Services
import AuthService from '../../services/AuthService';
import ApiService from '../../services/ApiService';
// Import CSS
import '../../styles/CustomerApp.css';

// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {};
  }

  componentDidMount() {
    ApiService.findRestaurants().then((res) => {
      this.props.loadRestaurantList(res);
    });
  }

  logout() {
    AuthService.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="CustomerApp">
        <div className="sidebar-left">
          <Mast />
          <CustomerNav {...this.props} />
        </div>
        <main>
          <div className="small-screen-customer">
            <Mast />
            <CustomerNavContainer {...this.props} />
          </div>
          <CustomerModalsContainer />
          <Switch>
            <Route path="/customer/home/findRestaurants" component={FindRestaurantsContainer} />
            <Route path="/customer/home/history" component={OrderHistoryContainer} />
            <Route path="/customer/home/order" component={OrderContainer} />
            <Route path="/customer/home/settings" component={CustomerSettingsContainer} />
            <Route path="/customer/home/favorites" component={FavoritesContainer} />
            <Route path="/customer/home/:id/menu" component={MenuContainer} />
            <Route path="/customer/home/confirm-order" component={ConfirmOrderContainer} />
            <Route path="/customer/home/payment" component={PaymentMethodsContainer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default CustomerApp;
