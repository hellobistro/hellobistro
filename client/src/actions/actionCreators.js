export function increment() {
  return {
    type: 'INCREMENT_LIKES',
  };
}

export function addCustomer(obj) {
  obj.type = 'ADD_CUSTOMER';
  return obj;
}

export function getRestaurantData(data) {
  return {
    type: 'GET_RESTAURANT_DATA',
    data,
  };
}
