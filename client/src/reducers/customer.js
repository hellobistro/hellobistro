function customer(state = { cart: { restaurant: { id: null, name: null }, items: {}, table: null } }, action) {
  switch (action.type) {
    case 'LOAD_RESTAURANT_LIST':
      return Object.assign({}, state, {
        restaurants: action.data,
      });
    case 'LOAD_SELECTED_RESTAURANT':
      return Object.assign({}, state, {
        currentRestaurant: action.data,
      });
    case 'ADD_TO_CART':
      return Object.assign({}, state, {
        cart: {
          items: !state.cart || !state.cart.items ? { [action.data.id]: action.data } : { ...state.cart.items, [action.data.id]: action.data },
        },
      });
    case 'CLEAR_CART':
      return Object.assign({}, state, {
        cart: { restaurant: { id: null, name: null }, items: {}, table: null },
      });
    case 'SET_RESTAURANT':
      return Object.assign({}, state, {
        cart: { ...state.cart, restaurantId: action.id },
      });
    case 'LOAD_ORDERS':
      return Object.assign({}, state, {
        orders: action.data,
      });
    case 'UPDATE_TABLE':
      return Object.assign({}, state, {
        cart: { ...state.cart, table: action.tableNumber },
      });
    default:
      return state;
  }
}

export default customer;
