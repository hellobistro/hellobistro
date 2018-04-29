function customer(state = [], action) {
  switch(action.type) {
    case 'ADD_CUSTOMER' :
    console.log('add customer happend and action is', action)
    return [
        action
    ]
    default:
      return state;
  }
  return state;
}

export default customer;