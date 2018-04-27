export function increment() {
  return {
    type: 'INCREMENT_LIKES',
  };
}

export function addCustomer(obj) {
  obj.type = 'ADD_CUSTOMER';
  return obj;
}

export function loadRestaurantData(data) {
  return {
    type: 'LOAD_RESTAURANT_DATA',
    data,
  };
}

export function loadRestaurantList(data) {
  return {
    type: 'LOAD_RESTAURANT_LIST',
    data,
  };
}
