// Import dependencies
import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import Mast from "./Mast";

require("babel-polyfill");

class CustomerRegister extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      passwordMatch: true,
      validEmail: true,
      validUsername: true
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkFields() {
    const { password, verifypassword, email, username } = this.state;
    this.setState({
      passwordMatch: password.length > 0 && password === verifypassword,
      validEmail: this.validateEmail(email),
      validUsername: username ? true : false
    });
  }

  async validFields() {
    var check = await this.checkFields.call(this);
    return (
      this.state.username && this.state.passwordMatch && this.state.validEmail
    );
  }

  async registerCustomer(e) {
    e.preventDefault();
    const {
      username,
      firstname,
      lastname,
      password,
      verifypassword,
      zip,
      phone,
      email
    } = this.state;
    var check = await this.validFields.call(this);
    if (check) {
      AuthService.customerRegister(
        username,
        firstname,
        lastname,
        password,
        zip,
        phone,
        email
      )
        .then(res => {
          this.setState({ error: false });
          this.props.history.replace("/");
          console.log("successfully registered ~~", res);
        })
        .catch(err => {
          this.setState({ error: true });
          console.error("error registering customer", err);
        });
    }
  }

  render() {
    return (
      <div className="CustomerRegister">
        <Mast />

        <div className="mock-form">
          <div className="form-section">
            <div className="form-section-header">
              Create an account (* fields are required)
            </div>
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <input
                className="form-input"
                name="username"
                placeholder="Username"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstname">First Name *</label>
              <input
                className="form-input"
                name="firstname"
                placeholder="First Name"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name *</label>
              <input
                className="form-input"
                name="lastname"
                placeholder="Last Name"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Password *</label>
              <input
                className="form-input"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Re-enter Password *</label>
              <input
                className="form-input"
                name="verifypassword"
                placeholder="Re-enter Password"
                type="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Zip*</label>
              <input
                className="form-input"
                name="zip"
                placeholder="Zip Code"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Phone*</label>
              <input
                className="form-input"
                name="phone"
                placeholder="Phone"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                className="form-input"
                name="email"
                placeholder="Email Address"
                type="text"

                onChange={this.handleChange.bind(this)}
              />
            </div>

            <button onClick={this.registerCustomer.bind(this)}>Register</button>
            {this.state.error ? <div>Email already exists </div> : <div />}
            {this.state.passwordMatch === false ? (
              <div>Passwords do not match </div>
            ) : (
              <div />
            )}
            {this.state.validEmail === false ? (
              <div>Not a valid email </div>
            ) : (
              <div />
            )}
            {this.state.validUsername === false ? (
              <div>Please provide a username </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerRegister;
