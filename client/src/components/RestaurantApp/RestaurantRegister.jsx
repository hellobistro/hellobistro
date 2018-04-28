// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
require('babel-polyfill');

class RestaurantRegister extends Component {
  constructor(){
    super();
    this.Auth = new AuthService();
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
    if(password.length > 0 && password === confirmpassword){
      this.setState({passwordMatch: true})
    } else {
      this.setState({passwordMatch: false})
    }
    if(this.validateEmail(email)){
      this.setState({validEmail: true})
    } else {
      this.setState({validEmail: false})
    }
  }

  async validFields(){
    var check = await this.checkFields.call(this);
    return this.state.passwordMatch && this.state.validEmail;
  }

  async registerRestaurantUser(e) {
    e.preventDefault();
    const { email, password, phone, name, addressOne, addressTwo, addressCity, addressState, addressZip, description, genre, type } = this.state;
    var check = await this.validFields.call(this)
    if(check){
      this.Auth.restaurantRegister(email, password, phone, name, addressOne, addressTwo, addressCity, addressState, addressZip, description, genre, type)
        .then(res => {
          this.setState({error: false});
          this.props.history.replace('/restaurant/login')
          console.log('successfully registered restaurant ~~', res)
        })
        .catch(err => {
          this.setState({error: true});
          console.error('error registering restaurant', err)
        })
    }
  }

  render(){
    console.log('the state inside restaurantRegister', this.state)
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
          <input name="confirmpassword" placeholder="Re-enter Password" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Phone</div> 
          <input name="phone" placeholder="Phone" type="text" onChange={this.handleChange.bind(this)}/> 
          <br />
          <div>Name *</div> 
          <input name="name" placeholder="Restaurant Name" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Address one</div> 
          <input name="addressOne" placeholder="Address one" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Address two</div> 
          <input name="addressTwo" placeholder="Address two" type="text" onChange={this.handleChange.bind(this)}/> 
          <br />
          <div className="RegisterLabel">City</div> 
          <input name="addressCity" placeholder="City" type="text" onChange={this.handleChange.bind(this)}/>
          <br /> 
          <div className="RegisterLabel">State</div> 
          <input name="addressState" placeholder="State" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Zip Code</div> 
          <input name="addressZip" placeholder="Zip Code" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Descriptoin: </div> 
          <textarea name="description" placeholder="Description" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Genre</div> 
          <input name="genre" placeholder="Genre" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Type</div> 
          <input name="type" placeholder="Type" onChange={this.handleChange.bind(this)}/>
          <br />
          <button onClick={this.registerRestaurantUser.bind(this)}>Register</button>
          {
            this.state.error
            ? <div>Email already exists </div>
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
      </div>
    )
  }
}

export default RestaurantRegister;