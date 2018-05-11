import React from 'react';

const MenuItem = (props) => {
  console.log("props", props)
  const price = props.data.price.toFixed(2);
  const description = props.data.description ? <p>Description: {props.data.description}</p> : null;
  const button = props.state.customer.cart.restaurant.id === null || props.state.customer.cart.restaurant.id === props.state.customer.currentRestaurant.id ? <button className="modal-button" onClick={() => { props.toggleModal(data); }}>Add to cart</button> : null;
  return (
    <div className="customer-menu-item">
      <h3>{props.data.name}</h3>
      <p>${price}</p>
      {button}
    </div>
  );
};

export default MenuItem;
