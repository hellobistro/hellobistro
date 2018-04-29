// Import dependencies
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// Import components/containers
import RestaurantNav from './RestaurantNav';
import Mast from './Mast';
import {
  RestaurantLoginContainer,
  DashBoardContainer,
  MenuManagerContainer,
  PromosContainer,
  RestaurantRegisterContainer,
  RestaurantSettingsContainer,
} from '../Containers';


import AuthService from '../../services/AuthService';
import ApiService from '../../services/ApiService';

import '../../styles/RestaurantApp.css';

class RestaurantApp extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService(); 
    this.state = {};
  }

  componentDidMount() {
    // Update core restaurant information upon mount, only if different
    try {
      ApiService.getRestaurantData(this.props.state.restaurant.restaurantInfo.id).then((data) => {
        if (!this.props.state.restaurant.restaurantInfo.updatedAt === data.updatedAt) {
          this.props.updateRestaurantData();
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    catch(error) {
      console.error(error);
    }

    // Update analytics information upon mount, only if different
    // NOTE: Below code is not yet working, needs to be refactored in tandem with analytics service
    // try {
    //   ApiService.getAnalytics(this.props.state.restaurant.restaurantInfo.id).then((data) => {
    //     if (!this.props.state.restaurant.restaurantInfo.updatedAt === data.updatedAt) {
    //       this.props.updateRestaurantData();
    //     }
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // }
    // catch(error) {
    //   console.error(error);
    // }
  }

  logout() {
    this.Auth.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="RestaurantApp DebugComponentBlue">
        <div className="sidebar-left">
          <Mast />
          <RestaurantNav {...this.props} />
        </div>
        <main>
          <div className="small-screen">
            <Mast />
            <RestaurantNav {...this.props} />
          </div>
          <Switch>
          <Route path='/restaurant/home/register' component={RestaurantRegisterContainer}/>
          <Route path='/restaurant/home/dashboard' component={DashBoardContainer}/>
          <Route path='/restaurant/home/menuManager' component={MenuManagerContainer}/>
          <Route path='/restaurant/home/settings' component={RestaurantSettingsContainer}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default RestaurantApp;
