// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken"
// Import services
import AuthService from '../services/AuthService';
import ApiService from '../services/ApiService';

// Import CustomerApp component and subcomponents

// Import RestaurantApp component and subcomponents
import {
  CustomerAppContainer,
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
  CustomerRegisterContainer,
  RestaurantUserRegisterContainer,
} from './Containers';

// import {sampleRestaurantGet} from '../../sampleData';

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

  componentDidMount() {
    const restaurantId = 2;
    ApiService.getRestaurantData(restaurantId).then((res) => {
      console.log('Fetch resolved.', res);
      this.props.loadRestaurantData(res);
    });
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
          <Route path="/customer/register" component={CustomerRegisterContainer} /> 
          <Route path="/restaurant/userRegister" component={RestaurantUserRegisterContainer} />   
        {/* </Switch> */}
      </div>
    );
  }
}
  
  export default App;
