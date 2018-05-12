function modals(state = { id: null, data: {}, visible: false }, action) {
  switch (action.type) {
    case 'MODAL_ON':
      return Object.assign({}, state, {
        id: action.id,
        data: action.data,
        visible: true,
      });
    case 'MODAL_OFF':
      return Object.assign({}, state, {
        id: null,
        data: {},
        visible: false,
      });
    default:
      return state;
  }
}

export default modals;
