function ui(state = { navVisible: false }, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        navVisible: !state.navVisible,
      });
    default:
      return state;
  }
}

export default ui;
