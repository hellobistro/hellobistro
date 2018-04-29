// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
const jwt = require('jsonwebtoken');
import decode from 'jwt-decode';
//import { history } from '../../store';
import { withRouter, Link } from "react-router-dom";
// CustomerLogin component
// Used by Customers to log into app
class CustomerLogin extends Component  {
  constructor(){
    super();
    this.Auth = new AuthService();
    this.state = {
      error: false
    }
  }

  componentWillMount(){
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.Auth.login(this.state.email, this.state.password)
      .then((token) => {
        this.setState({error: false})
        this.props.history.replace('/customer/home')
      })
      .catch( err => {
        this.setState({error: true});
        console.error('err in handlesubmit', err)
      })
  }

  handleCreate(e){
    e.preventDefault();
    this.props.history.replace('/customer/register')
  }


  render() {
    return (
      <div className="CustomerLogin DebugComponentRed">
        <p>This is the <strong>CustomerLogin</strong> component</p>
        <p>Fix it so it is conditionally rendered at <code>/</code></p>
        <input placeholder="Email" name="email" type="text" onChange={this.handleChange.bind(this)}/>
        <input placeholder="Password" name="password" type="password" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleLogin.bind(this)}>LOGIN</button>
        <button onClick={this.handleCreate.bind(this)}>Create Account</button>
        {
          this.state.error
          ? <div>Invalid credentials</div>
          : <div></div>
        }
        <Link to='/restaurant/login'>HelloBistro for Restaurants</Link>
        {/* <Link to='/developer/login'>HelloBistro for Developers</Link>*/}
      </div>
    )}
}

export default withRouter(CustomerLogin);
