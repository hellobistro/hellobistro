// Import dependencies
import React, { Component } from 'react';
import AuthService from '../../services/AuthService'

class RestaurantRegister extends Component {
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

  registerRestaurant(e) {
  }
  
  render(){
    console.log('the state in Restaurantregister', this.state)
    return(
      <div className="RestaurantRegister"> 
        <h2>Restaurant Registration</h2>
          <p> * fields are required </p>
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
          <input name="city" placeholder="City" type="text" onChange={this.handleChange.bind(this)}/>
          <br /> 
          <div className="RegisterLabel">State</div> 
          <input name="state" placeholder="State" type="text"/>
          <br />
          <div className="RegisterLabel">Zip Code</div> 
          <input name="zip" placeholder="Zip Code" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Email</div> 
          <input name="email" placeholder="Email" type="text" onChange={this.handleChange.bind(this)}/>
          <br />
          <div className="RegisterLabel">Phone</div> 
          <input name="phone" placeholder="Phone" onChange={this.handleChange.bind(this)}/>
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
          <br />
          <button onClick={this.registerRestaurant.bind(this)}>Register</button>
      </div>
    )
  }
}

export default RestaurantRegister;