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
    this.state.formValues = {};
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      formValues: Object.assign(this.state.formValues, {[e.target.name]: e.target.value})
    });

    console.log('state', this.state);
  }

  handleSubmit = (e) => {
    console.log('wtf is happeninggg', this.props.state.restaurant.restaurantInfo);
    e.preventDefault();
    ApiService.updateRestaurant(this.props.state.restaurant.restaurantInfo, this.state.formValues).then((data) => {
      this.props.updateRestaurantData(data);
    }).then(() => {
      this.setState({confirmation: true});
      window.scrollTo(0,0);
    }).catch(err => {
      err.response.json().then((errMsg) => {
        this.setState({errorMessage: errMsg.error})
      })
    });
  }

  renderConfirmation = () => {
    return (
      <p className="success">
        Restaurant/account information updated
      </p>
    );
  }

  render() {
    let info = this.props.state.restaurant.restaurantInfo;
    return(
      <div className="RestaurantSettings">
        <div className="page-header">
          <p>
            Information/Settings for{' '}
            <strong>{info.name}</strong>
          </p>
          { this.state.confirmation ? this.renderConfirmation() : <div></div>}
        </div>

        <form className="form">
          <div className="form-section">
            <div className="form-section-header">Restaurant Information</div>

            <div className="form-group">
              <label htmlFor="restaurantName">Restaurant Name</label>
              <input
                className="form-input"
                cid="restaurantName"
                name="name"
                type="text"
                defaultValue={info.name}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="addressOne">Address</label>
              <input
                className="form-input"
                cid="addressOne"
                name="addressOne"
                type="text"
                defaultValue={info.addressOne}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="addressTwo">Address (2)</label>
              <input
                className="form-input"
                cid="addressTwo"
                name="addressTwo"
                type="text"
                defaultValue={info.addressTwo}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                className="form-input"
                cid="city"
                name="city"
                type="text"
                defaultValue={info.city}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                className="form-input"
                cid="state"
                name="state"
                type="text"
                defaultValue={info.state}
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                className="form-input"
                cid="zip"
                name="zip"
                type="text"
                defaultValue={info.zip}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre </label>
              <input
                className="form-input"
                cid="genre"
                name="genre"
                type="text"
                defaultValue={info.genre}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                className="form-input"
                cid="type"
                name="type"
                type="text"
                defaultValue={info.type}
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
                name="email"
                type="text"
                defaultValue={info.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Change Password</label>
              <input
                className="form-input"
                cid="password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          {
            this.state.errorMessage
            ? <div className='error'>{this.state.errorMessage}</div>
            : <div></div>
          }
          <button onClick={this.handleSubmit}>Submit Changes</button>
        </form>
      </div>

    );
  }
}


export default RestaurantSettings;
