// Import dependencies
import React from 'react';

import '../../styles/DashBoard.css';


const DashBoard = () => (
  <div className="DashBoard">
      

        <div className="card">
        <div className="card-header-icon mat-color-green">
          <i class="material-icons">attach_money</i>
        </div>
          <div className="card-header-text">Revenue</div>
          <div className="chart">chart goes here</div>
        </div>


        <div className="card">
        <div className="card-header-icon mat-color-lightblue">
          <i class="material-icons">timeline</i>
        </div>
          <div className="card-header-text">Order Activity</div>
          <div className="chart">chart goes here</div>
        </div>

        <div className="card">
        <div className="card-header-icon mat-color-orange">
          <i class="material-icons">fingerprint</i>
        </div>
          <div className="card-header-text">Unique Customers</div>
          <div className="chart">chart goes here</div>
        </div>

        <div className="card">
        <div className="card-header-icon mat-color-teal">
          <i class="material-icons">fingerprint</i>
        </div>
          <div className="card-header-text">Unique Customers</div>
          <div className="chart">chart goes here</div>
        </div>

        <div className="card"><i class="material-icons">timeline</i></div>
        <div className="card"><i class="material-icons">fingerprint</i></div>
        <div className="card">a</div>
        <div className="card">a</div>
        <div className="card">a</div>
        <div className="card">a</div>
        <div className="card">a</div>
      </div>
);

export default DashBoard;