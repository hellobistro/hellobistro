// Import dependencies
import React from 'react';
import { Route } from 'react-router-dom';

import { RestaurantLoginContainer } from '../Containers';
import { DashBoardContainer } from '../Containers';
import { MenuManagerContainer } from '../Containers';
import { PromosContainer } from '../Containers';
import { RestaurantRegisterContainer } from '../Containers';
import { RestaurantSettingsContainer } from '../Containers';
import RestaurantUserRegister from './RestaurantUserRegister';
// Create parent application
class RestaurantApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="RestaurantApp DebugComponentBlue">
        <p>This is the <strong>RestaurantApp</strong> component</p>
        <Route path="/" component={RestaurantLoginContainer} />
        <p>Remaining components to implement under RestaurantApp:</p>
        <ul>
          <li><Route path="/" component={RestaurantUserRegister} /></li>
          <li><Route path="/" component={RestaurantRegisterContainer} /></li>
          <li><Route path="/" component={DashBoardContainer} /></li>
          <li><Route path="/" component={MenuManagerContainer} /></li>
          <li><Route path="/" component={RestaurantSettingsContainer} /></li>
          <li><Route path="/" component={PromosContainer} /></li>
        </ul>
      </div>
    );
  }
}

export default RestaurantApp;
