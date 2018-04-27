// Import dependencies
import React from "react";

import "../../styles/RestaurantSettings.css";

const RestaurantSettings = props => (
  <div className="RestaurantSettings">
    <div className="page-header">
      <p>
        Information/Settings for{" "}
        <strong>{props.state.restaurant.data.name}</strong>
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
            defaultValue="Koi Palace"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressOne">Address</label>
          <input
            className="form-input"
            cid="addressOne"
            type="text"
            defaultValue="Koi Palace"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressTwo">Address (2)</label>
          <input
            className="form-input"
            cid="addressTwo"
            type="text"
            defaultValue="Koi Palace"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            className="form-input"
            cid="city"
            type="text"
            defaultValue="Koi Palace"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            className="form-input"
            cid="state"
            type="text"
            defaultValue="Koi Palace"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip</label>
          <input
            className="form-input"
            cid="zip"
            type="text"
            defaultValue="Koi Palace"
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
            defaultValue="koipalace@koipalaceyeah.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Change Password</label>
          <input
            className="form-input"
            cid="password"
            type="text"
            defaultValue="*****"
          />
        </div>
      </div>
    </form>
  </div>
);

export default RestaurantSettings;
