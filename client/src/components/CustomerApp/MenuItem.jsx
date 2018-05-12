import React from 'react';

const MenuItem = (props) => {
  const addToCart = () => {
    // check if item is already in cart
    if (!props.state.customer.cart.items[props.data.id]) {
      // if not, add item to cart with quantity and special keys.
      props.data.quantity = 1;
      props.data.special = '';
      props.state.customer.cart.items[props.data.id] = props.data;
    }
    // check if cart restaurant is already set.
    if (!props.state.customer.cart.restaurantId) {
      console.log('no restauarant id! ', props.data.RestaurantId);
      props.setCartRestaurant(props.data.RestaurantId);
    }
    props.modalOn('orderModal', props.state.customer.cart.items[props.data.id]);
  };
  const price = props.data.price.toFixed(2);
  const description = props.data.description ? <p>Description: {props.data.description}</p> : null;
  const button = props.state.customer.cart.restaurantId === null || props.state.customer.cart.restaurantId === props.state.customer.currentRestaurant.id ? <button className="modal-button" onClick={addToCart}>Add to cart</button> : null;

  return (
    <div className="customer-menu-item">
      <h3>{props.data.name}</h3>
      <p>${price}</p>
      {button}
    </div>
  );
};

export default MenuItem;
