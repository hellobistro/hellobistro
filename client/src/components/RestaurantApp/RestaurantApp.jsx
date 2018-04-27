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

import '../../styles/RestaurantApp.css';

class RestaurantApp extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService(); 
    this.state = {};
  }

  logout(){
    this.Auth.logout();
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="RestaurantApp DebugComponentBlue">
<<<<<<< HEAD
        <p>This is the <strong>RestaurantApp</strong> component</p>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <p>Remaining components to implement under RestaurantApp:</p>
        <ul>
          <li><Link to='/restaurant/dashboard'>Dashboard</Link></li>
          <li><Link to='/restaurant/menuManager'>Menu Manager</Link></li>
          <li><Link to='/restaurant/settings'>Settings</Link></li>
          <li><Link to='/restaurant/promos'>Promos</Link></li>
        </ul>
=======
        <div className="sidebar-left">
          <Mast />
          <RestaurantNav />
        </div>
        <main>
          <div className="small-screen">
            <Mast />
            <RestaurantNav />
          </div>
          <Switch>
          <Route path='/restaurant/home/register' component={RestaurantRegisterContainer}/>
          <Route path='/restaurant/home/dashboard' component={DashBoardContainer}/>
          <Route path='/restaurant/home/menuManager' component={MenuManagerContainer}/>
          <Route path='/restaurant/home/settings' component={RestaurantSettingsContainer}/>
          </Switch>
        </main>
>>>>>>> develop
      </div>
    );
  }
}

export default RestaurantApp;
