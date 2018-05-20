// Import dependencies
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "../../styles/RestaurantNav.css";

//
export default class RestaurantNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandMenu: true
    };

    // Bind functions in constructor
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleLogOut() {
    localStorage.clear();
    this.props.history.push("/restaurant/login");
    this.props.logOut();
  }

  handleMenuToggle() {
    this.setState({
      expandMenu: !this.state.expandMenu
    });
  }

  renderMenu() {
    if (this.state.expandMenu) {
      return (
        <div>
          <ul className="link-list">
            <li>
              <Link to="/restaurant/home/dashboard">
                <i className="material-icons">dashboard</i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/restaurant/home/menuManager">
                <i className="material-icons">restaurant_menu</i>Menu Manager
              </Link>
            </li>
            <li>
              <Link to="/restaurant/home/orderManager">
                <i className="material-icons">assignment</i>Orders Manager
              </Link>
            </li>
            <li>
              <Link to="/restaurant/home/settings">
                <i className="material-icons">settings</i>Settings
              </Link>
            </li>
            <li>
              <Link to="/restaurant/home/promos">
                <i className="material-icons">event</i>Promos
              </Link>
            </li>
            <li className="link-log-out" onClick={this.handleLogOut}>
              <i className="material-icons">exit_to_app</i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      );
    }
    return <div />;
  }

  render() {
    return (
      <div className="RestaurantNav">
        <div className="menu-control" onClick={this.handleMenuToggle}>
          <i className="material-icons">menu</i>
        </div>
        {this.renderMenu()}
      </div>
    );
  }
}
