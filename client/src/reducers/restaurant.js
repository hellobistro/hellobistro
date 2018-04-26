const initialState = {
  data: {
    MenuSections: [],
  },
};

function restaurant(state = initialState, action) {
  switch (action.type) {
    case 'GET_RESTAURANT_DATA':
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
  /* * commenting out duplicate 'return state' * */
  // return state;
}

export default restaurant;
