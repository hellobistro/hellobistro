// Set initial state
const initialState = {
  user: null,
};

// (Restaurant) User reducer
function user(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
}

export default user;
