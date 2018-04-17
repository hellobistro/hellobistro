// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';


import CustomerLogin from './CustomerLogin';
import FindRestaurants from './FindRestaurants';
import Orders from './Orders';


// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="CustomerApp DebugComponentRed">
        <p>This is the <strong>CustomerApp</strong> component</p>
        <Route path="/login" component={CustomerLogin} />
        <Route path="/find" component={FindRestaurants} />
        <Route path="/orders" component={Orders} />
        <p>Remaining components to implement under CustomerApp:</p>
        <ul>
          <li>Register</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

export default CustomerApp;
