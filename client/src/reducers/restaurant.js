const initialState = {
  data: {
    MenuSections: [],
  },
  restaurantInfo:{},
  analytics: {},
};

function restaurant(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_RESTAURANT_DATA':
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'ADD_RESTAURANT':
      return Object.assign({}, state, {
        restaurantInfo: action
      });
    case 'UPDATE_RESTAURANT_DATA':
      console.log('update rest reducer called with ', action.data);
      return Object.assign({}, state, {
        restaurantInfo: action.data, 
      });
    case 'UPDATE_ANALYTICS_DATA':
      return Object.assign({}, state, {
        analytics: action.data,
      });
    default:
      return state;
  }
  /* * commenting out duplicate 'return state' * */
  // return state;
}

export default restaurant;
