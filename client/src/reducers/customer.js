function customer(state = [], action) {
  switch(action.type) {
    case 'LOAD_RESTAURANT_LIST':
      return Object.assign({}, state, {
        restaurants: action.data,
      });
    default:
      return state;
  }
}

export default customer;