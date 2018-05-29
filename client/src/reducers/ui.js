function ui(state = { navVisible: false, notifications: [] }, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        navVisible: !state.navVisible,
      });
    case 'ADD_NOTIFICATION':
      return Object.assign({}, state, {
        notifications: state.notifications.concat(action.data),
      });
    default:
      return state;
  }
}

export default ui;
