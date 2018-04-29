// Import dependencies
import React from 'react';

// Import services/helpers
import ApiService from '../../services/ApiService';

// Import CSS
import '../../styles/RestaurantSettings.css';

class RestaurantSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      formValues: {
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    ApiService.updateRestaurant(this.props.state.restaurant.restaurantInfo.id, this.state.formValues)
      .catch(err => console.error('err in submit changes', err));
  }


  render() {
    return(
      <div className="RestaurantSettings">
        <div className="page-header">
          <p>
            Information/Settings for{' '}
            <strong>{this.props.state.restaurant.restaurantInfo.name}</strong>
          </p>
        </div>

        <form className="form">
          <div className="form-section">
            <div className="form-section-header">Restaurant Information</div>

            <div className="form-group">
              <label htmlFor="restaurantName">Restaurant Name</label>
              <input
                className="form-input"
                cid="restaurantName"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.name}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="addressOne">Address</label>
              <input
                className="form-input"
                cid="addressOne"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.addressOne}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="addressTwo">Address (2)</label>
              <input
                className="form-input"
                cid="addressTwo"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.addressTwo}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                className="form-input"
                cid="city"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.addressCity}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                className="form-input"
                cid="state"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.addressState}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                className="form-input"
                cid="zip"
                type="text"
                value={this.props.state.restaurant.restaurantInfo.addressZip}
                onChange={this.handleChange}

              />
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-header">Account Details</div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                cid="email"
                type="text"
                defaultValue={this.props.state.restaurant.restaurantInfo.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Change Password</label>
              <input
                className="form-input"
                cid="password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit Changes</button>
        </form>
      </div>

    );
  }
}


export default RestaurantSettings;
