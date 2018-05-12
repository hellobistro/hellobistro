// Import dependencies
import React, { Component } from "react";
import AuthService from "../../services/AuthService";

// Import CSS
import "../../styles/RestaurantLogin.css";
import Mast from "./Mast";
import { withRouter, Link } from "react-router-dom";

// Used by Restaurant Users to log into app
class RestaurantLogin extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    AuthService.restaurantLogin(this.state.email, this.state.password)
      .then(res => {
        this.setState({ error: false });
        console.log("the res after logging in", res);
        const { userId, userName, restaurantInfo } = res;
        this.props.addUser(userId, userName);
        this.props.addRestaurant(restaurantInfo);
      })
      .then(() => {
        this.props.history.replace("/restaurant/home/dashboard");
      })
      .catch(err => {
        this.setState({ error: true });
        console.error("err in handlesubmit", err);
      });
  }

  handleCreateAcc(e) {
    e.preventDefault();
    this.props.history.replace("/restaurant/userRegister");
  }

  render() {
    return (
      <div className="RestaurantLogin">
        <Mast primaryText={"HelloBistro for Restaurants"} />
        <div className="mock-form">
          <div className="form-section">
            <div className="form-section-header" />

            <div className="form-group">
              <label htmlFor="restaurantName">Email</label>
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="restaurantName">Password</label>

              <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button onClick={this.handleLogin.bind(this)}>LOGIN</button>
            <button onClick={this.handleCreateAcc.bind(this)}>
              Create Account
            </button>
          </div>
          {this.state.error ? <div>Invalid credentials</div> : <div />}
        </div>

                  <div className="switch-customer">
        <Link to="/customer/login">
          <i class="material-icons">people</i>HelloBistro for Hungry People
        </Link>
    
          </div>


      </div>
    );
  }
}

export default RestaurantLogin;
