function ui(state = { navVisible: false, notifications: [] }, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        navVisible: !state.navVisible,
      });
    case 'ADD_NOTIFICATION':
      return Object.assign({}, state, {
        notifications: action.data,
      });
    default:
      return state;
  }
}

export default ui;
