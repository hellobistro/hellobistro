// Import dependencies
import React from 'react';
import ApiService from '../../services/ApiService';
import '../../styles/CustomerConfirmOrder.css';

// ConfirmOrder component
// Confirm before a user places an order
const ConfirmOrder = (props) => {
  const cartItems = props.state.customer.cart.items;
  console.log(cartItems);
  const items = Object.values(cartItems);
  console.log('Items from cart', items);
  const billTotal = items.reduce((a, b) =>
    a + (b.price * b.quantity), 0);

  const handleSubmit = () => {
    const { userId, paymentId } = props.state.user;
    const restaurantId = props.state.customer.cart.restaurantId;
    console.log('restaurant id on handle submit: ', restaurantId)
    const { table } = props.state.customer.cart;
    ApiService.stripeProcessing(paymentId).then((res) => {
      console.log('Stripe mockup', res);
      ApiService.submitOrder('queued', billTotal, res.transactionId, table, userId, restaurantId, items)
        .then(() => {
          props.clearCart();
          props.history.push('/customer/home/history');
        });
    });
  };

  return (
    <div className="ConfirmOrder DebugComponentRed">
      <h2>Finalize Your Order</h2>
      <h3>Bill total: ${billTotal.toFixed(2)}</h3>
      <span>Your table number: <input className="table-number" onChange={e => props.updateTable(e.target.value)} type="text" placeholder="#" /></span>
      <p>Choose your payment method:</p><select className="select-payment"><option>Visa -3533</option></select>
      <button className="place-order" onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default ConfirmOrder;
