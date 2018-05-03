// Import dependencies
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// Import components
import Mast from './Mast';
import CustomerNav from './CustomerNav';
import {
  FindRestaurantsContainer,
  OrderHistoryContainer,
  CustomerOrderContainer,
  CustomerSettingsContainer,
  MenuContainer,
  ConfirmOrderContainer,
} from '../Containers';
// Import Services
import AuthService from '../../services/AuthService';
import ApiService from '../../services/CustomerApiService';
// Import CSS
import '../../styles/CustomerApp.css';

// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {};
  }

  componentDidMount() {
    if (typeof this.props.state.customer.restaurants === 'undefined') {
      ApiService.findRestaurants().then((res) => {
        this.props.loadRestaurantList(res);
      });
    }
  }

  // logout() {
  //   this.Auth.logout();
  //   this.props.history.replace('/');
  // }

  render() {
    return (
      <div className="CustomerApp DebugComponentRed">
        <div className="sidebar-left">
          <Mast />
          <CustomerNav {...this.props} />
        </div>
        <main>
          <div className="small-screen">
            <Mast />
            <CustomerNav {...this.props} />
          </div>
          <Switch>
            <Route path="/customer/home/findRestaurants" component={FindRestaurantsContainer} />
            <Route path="/customer/home/history" component={OrderHistoryContainer} />
            <Route path="/customer/home/order" component={CustomerOrderContainer} />
            <Route path="/customer/home/settings" component={CustomerSettingsContainer} />
            <Route path="/customer/home/:id/menu" component={MenuContainer} />
            <Route path="/customer/home/confirm-order" component={ConfirmOrderContainer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default CustomerApp;
