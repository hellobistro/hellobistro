const initialState = {
  data: {
    MenuSections: [],
  },
  restaurantInfo:{},
};

function restaurant(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_RESTAURANT_DATA':
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'ADD_RESTAURANT':
    console.log('addRestaurantAction dispatched', action)
    return Object.assign({}, state, {
      restaurantInfo: action,
    });
    default:
      return state;
  }
  /* * commenting out duplicate 'return state' * */
  // return state;
}

export default restaurant;
