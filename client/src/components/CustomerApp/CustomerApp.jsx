// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import { CustomerLoginContainer } from '../Containers';
import { FindRestaurantsContainer } from '../Containers';
import { OrdersContainer } from '../Containers';
import { CustomerRegisterContainer } from '../Containers';
import { CustomerSettingsContainer } from '../Containers';


// Create parent application
class CustomerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('the props in customer App~~~', this.props)
    return (
      <div className="CustomerApp DebugComponentRed">
        <p>This is the <strong>CustomerApp</strong> component</p>
        <Route path="/" component={CustomerLoginContainer} />
        <Route path="/" component={FindRestaurantsContainer} />
        <Route path="/" component={OrdersContainer} />
        <p>Remaining components to implement under CustomerApp:</p>
        <ul>
          <li><Route path="/" component={CustomerRegisterContainer} /></li>
          <li><Route path="/" component={CustomerSettingsContainer} /></li>
        </ul>
      </div>
    );
  }
}

export default CustomerApp;
