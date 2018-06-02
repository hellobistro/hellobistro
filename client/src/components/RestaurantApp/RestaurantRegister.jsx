// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import Mast from "./Mast";

import "babel-polyfill";

class RestaurantRegister extends Component {
  constructor(){
    super();
    this.state = {
      error: false,
      passwordMatch: true,
      validEmail: true,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkFields(){
    const {password, confirmpassword, email, username} = this.state
    this.setState({
      passwordMatch: password.length > 0 && password === confirmpassword,
      validEmail: this.validateEmail(email)
    })
  }

  async validFields(){
    var check = await this.checkFields.call(this);
    return this.state.passwordMatch && this.state.validEmail;
  }

  registerRestaurantUser(e) {
    e.preventDefault();
    const { email, password, phone, name, addressOne, addressTwo, addressCity, addressState, addressZip, description, genre, type } = this.state;
    this.setState({error: false}, async () => {
      let check = await this.validFields.call(this)
      if(check){
        AuthService.restaurantRegister(email, password, phone, name, addressOne, addressTwo, addressCity, addressState, addressZip, description, genre, type)
          .then(res => {
            this.setState({error: false});
            this.props.history.replace('/restaurant/login')
            console.log('successfully registered restaurant ~~', res)
          })
          .catch(error => {
            console.log('error registering restaurant', error)
            error.response.json().then((err)=>{
            this.setState({ error: err.error });
          })
        })
      }
    })
  }

  render(){
    console.log('the state inside restaurantRegister', this.state)
    return(
      <div className="RestaurantUserRegister"> 


      <Mast primaryText={'HelloBistro for Restaurants'}/>

<div className="mock-form">
  <div className="form-section">
    <div className="form-section-header">
      Register your restaurant (* fields are required)
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
                name="confirmpassword"
                placeholder="Re-enter Password"
                type="password"
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
              <label htmlFor="name">Name *</label>
              <input
                className="form-input"
                name="name"
                placeholder="Restaurant Name"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>


          <div className="form-group">
              <label htmlFor="name">Address (1) *</label>
              <input
                className="form-input"
                name="addressOne"
                placeholder="Address (line 1)"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>



          <div className="form-group">
              <label htmlFor="name">Address (2)</label>
              <input
                className="form-input"
                name="addressTwo"
                placeholder="Address (line 2)"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>


                      <div className="form-group">
              <label htmlFor="name">City *</label>
              <input
                className="form-input"
                name="addressCity"
                placeholder="City"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

                      <div className="form-group">
              <label htmlFor="name">State *</label>
              <input
                className="form-input"
                name="addressState"
                placeholder="State"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

                      <div className="form-group">
              <label htmlFor="name">Zip Code *</label>
              <input
                className="form-input"
                name="addressZip"
                placeholder="Zip Code"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>


                      <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-input" name="description" placeholder="Description" onChange={this.handleChange.bind(this)}/>

            </div>


                <div className="form-group">
              <label htmlFor="name">Genre *</label>
              <input
                className="form-input"
                name="genre"
                placeholder="Genre (e.g., Mexican, New American...)"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>


                            <div className="form-group">
              <label htmlFor="name">Type *</label>
              <input
                className="form-input"
                name="type"
                placeholder="Type (e.g., Bar, Restaurant)"
                type="text"
                onChange={this.handleChange.bind(this)}
              />
            </div>

          <button onClick={this.registerRestaurantUser.bind(this)}>Register</button>
          {
            this.state.error
            ? <div>{this.state.error}</div>
            : <div></div>
          }
          {
            this.state.passwordMatch === false
            ? <div>Passwords do not match </div>
            : <div></div>
          }
          {
            this.state.validEmail === false
            ? <div>Not a valid email </div>
            : <div></div>
          }
      </div></div></div>
    )
  }
}

export default RestaurantRegister;