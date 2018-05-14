// Import dependencies
import React, { Component } from "react";
import AuthService from "../../services/AuthService";
const jwt = require("jsonwebtoken");
import decode from "jwt-decode";

import "../../styles/CustomerLogin.css";
import Mast from "./Mast";

//import { history } from '../../store';
import { withRouter, Link } from "react-router-dom";
// CustomerLogin component
// Used by Customers to log into app
class CustomerLogin extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  componentWillMount() {
    var token = AuthService.getToken();
    var decoded = jwt.decode(token, { complete: true });
    if (token) {
      if (decoded.payload.userType === "Customer") {
        this.props.history.replace("/customer/home/findRestaurants");
      } else if (decoded.payload.userType === "Restaurant") {
        this.props.history.replace("/restaurant/home");
      }
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    AuthService.login(this.state.email, this.state.password)
      .then(res => {
        delete res["token"];
        console.log("New res", res);
        this.props.loadCustomerUser(res);
        this.setState({ error: false });
        this.props.history.replace("/customer/home/findRestaurants");
      })
      .catch(err => {
        this.setState({ error: true });
        console.error("err in handlesubmit", err);
      });
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.history.replace("/customer/register");
  }

  render() {
    return (
      <div className="CustomerLogin DebugComponentRed">
        <Mast />
        <div className="background">
          <div className="mock-form">
            <div className="form-section">
              <div className="form-section-header" />
              <div className="form-group">
                <input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <button className="login-button" onClick={this.handleLogin.bind(this)}>LOGIN</button>
              <button className="register-button" onClick={this.handleCreate.bind(this)}>
                Create Account
              </button>
            </div>
            {this.state.error ? <div>Invalid credentials</div> : <div />}
          </div>
        </div>

        {/* <Link to='/developer/login'>HelloBistro for Developers</Link>*/}
        <div className="switch-restaurant">
          <Link to="/restaurant/login">
            <i className="material-icons">store</i>HelloBistro for Restaurants
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CustomerLogin);
