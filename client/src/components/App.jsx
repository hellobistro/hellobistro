// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
// Import CustomerApp component and subcomponents

// Import RestaurantApp component and subcomponents
import { CustomerAppContainer,
        RestaurantAppContainer,
        RestaurantLoginContainer,
        CustomerLoginContainer,
        FindRestaurantsContainer,
        OrdersContainer,
        CustomerSettingsContainer,
        RestaurantRegisterContainer,
        DashBoardContainer,
        MenuManagerContainer,
        RestaurantSettingsContainer,
        PromosContainer,
} from './Containers';

import AuthService from '../services/AuthService';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";


// Create parent application
class App extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.checkUser = this.checkUser.bind(this);
    this.state = {
    };
  }
  
  componentWillMount(){
    if(this.checkUser() === 'Customer'){
      this.props.history.replace('/customer/home');
    } else if(this.checkUser() === 'Restaurant'){
      this.props.history.replace('/restaurant/home');
    }
  }

  checkUser(){
    var token = this.Auth.getToken()
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
    console.log('the history in app.jsx>>>>', history)
    console.log('the state in app.jsx~~~', this.state)
    const CustomerPrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => {
        return this.checkUser() === 'Customer'
          ? <Component {...props} /> 
          : <Redirect to={{
            pathname: '/restaurant/home',
            state: { from: props.location }
          }} />
      }} />
    )
    const RestaurantPrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => {
        return this.checkUser() === 'Restaurant'
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
      }} />
    )

  const removeMe = ({ match }) => {
    return <h1>Hello !</h1>
  }
    return (
      <div>
        <h1>Welcome to HelloBistro</h1>

        <h2>The below buttons are for testing only</h2>
        <button onClick={() => { this.props.increment(); }}>
          trigger
        </button>
        {/* <Switch> */}
          <CustomerPrivateRoute exact path="/customer/home" component={CustomerAppContainer} />
          <RestaurantPrivateRoute exact path="/restaurant/home" component={RestaurantAppContainer} /> 
          <Route exact path="/" component={CustomerLoginContainer} />
          <Route exact path="/customer/login" component={CustomerLoginContainer} />
          <Route exact path="/restaurant/login" component={RestaurantLoginContainer} />
          <Route path="/customer/findRestaurants" component={FindRestaurantsContainer} />
          <Route path="/customer/orders" component={OrdersContainer} />
          <Route path="/customer/settings" component={CustomerSettingsContainer} />
          <Route path="/restaurant/registerRestaurant" component={RestaurantRegisterContainer} />
          <Route path="/restaurant/dashboard" component={DashBoardContainer} />
          <Route path="/restaurant/menuManager" component={MenuManagerContainer} />
          <Route path="/restaurant/settings" component={RestaurantSettingsContainer} />
          <Route path="/restaurant/promos" component={PromosContainer} />   
        {/* </Switch> */}
      </div>
    );
  }
}
  
  export default App;
  