function posts(state = {counter: 0}, action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    return 
        {
          counter: state.counter + 1
        };
    default:
      return state;
  }
  return state;
}

export default posts;