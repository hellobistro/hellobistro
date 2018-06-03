// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import decode from 'jwt-decode';
import jwt from 'jsonwebtoken';
// Import services
import AuthService from '../services/AuthService';
import ApiService from '../services/ApiService';

// Import Customer/RestaurantApp component and subcomponents
import {
  CustomerAppContainer,
  RestaurantAppContainer,
  RestaurantLoginContainer,
  CustomerLoginContainer,
  CustomerOrderContainer,
  CustomerSettingsContainer,
  RestaurantRegisterContainer,
  MenuManagerContainer,
  RestaurantSettingsContainer,
  PromosContainer,
  CustomerRegisterContainer,
  ModalBackdropContainer,
  NotificationsContainer,
} from './Containers';

// Create parent application
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  checkUser = () => {
    var token = AuthService.getToken()
    var decoded = jwt.decode(token, {complete: true});
    if(token){
      if(decoded.payload.userType === 'Customer'){
        return 'Customer';
      } else if(decoded.payload.userType === 'Restaurant'){
        return 'Restaurant';
      }
    }
  }
  
  render() {
    return (
      <div className="App"> 
        {/* <Switch> */}
        <ModalBackdropContainer />
        {
        this.checkUser() === 'Customer'
         ? <Route path="/customer/home" component={CustomerAppContainer} />
         : this.checkUser() === 'Restaurant'
         ? <Route path="/restaurant/home" component={RestaurantAppContainer} /> 
         : ''
        }
        <Route exact path="/" component={CustomerLoginContainer} />
        <Route path="/customer/login" component={CustomerLoginContainer} />
        <Route path="/restaurant/login" component={RestaurantLoginContainer} />
        <Route path="/customer/register" component={CustomerRegisterContainer} />
        <Route path="/restaurant/userRegister" component={RestaurantRegisterContainer} />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
