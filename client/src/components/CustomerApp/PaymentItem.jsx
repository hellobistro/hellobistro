// import dependencies
import React from 'react';
import '../../styles/CustomerPayments.css';
import ApiService from '../../services/ApiService';

const PaymentItem = ({ data }) => {
  return (
    <div className="payment-item">
      {data.brand} ending with {data.last4} | Expiration: {data.exp_month}/{data.exp_year}
    </div>
  );
};

export default PaymentItem;
