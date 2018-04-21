// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService'

class RestaurantUserRegister extends Component {
  constructor(){
    super();
    this.Auth = new AuthService();
    this.state = {
      error: false
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerRestaurantUser(e) {
    e.preventDefault();
    const { email, password, phone} = this.state;
    this.Auth.restaurantUserRegister(email, password, phone)
      .then(res => {
        this.setState({error: false});
        //this.props.history.replace('/')
        console.log('successfully registered restaurantUser ~~', res)
      })
      .catch(err => {
        this.setState({error: true});
        console.error('error registering restaurantUser', err)
      })
  }
  
  render(){
    console.log('the state in restaurantUserRegister', this.state)
    return(
      <div className="RestaurantUserRegister"> 
        <h2>Restaurant User Registration</h2>
          <p> * fields are required </p>
          <div>Email *</div> 
          <input name="email" placeholder="Email" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Password *</div> 
          <input name="password" placeholder="Password" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Re-enter Password *</div> 
          <input name="confirmPassword" placeholder="Re-enter Password" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Phone</div> 
          <input name="phone" placeholder="Phone" type="text" onChange={this.handleChange.bind(this)}/> 
          <br />
          <br />
          <button onClick={this.registerRestaurantUser.bind(this)}>Register</button>
          {
            this.state.error
            ? <div>Email already exists </div>
            : <div></div>
          }
      </div>
    )
  }
}

export default RestaurantUserRegister;