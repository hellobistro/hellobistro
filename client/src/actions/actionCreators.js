export function increment() {
  return {
    type: 'INCREMENT_LIKES',
  };
}

// CUSTOMER APP ACTIONS

export function addCustomer(obj) {
  obj.type = 'ADD_CUSTOMER';
  return obj;
}

export function loadRestaurantList(data) {
  return {
    type: 'LOAD_RESTAURANT_LIST',
    data,
  };
}

export function loadSelectedRestaurant(data) {
  return {
    type: 'LOAD_SELECTED_RESTAURANT',
    data,
  };
}

export function addToCart(data) {
  return {
    type: 'ADD_TO_CART',
    data,
  };
}

// RESTAURANT APP ACTIONS

export function loadRestaurantData(data) {
  return {
    type: 'LOAD_RESTAURANT_DATA',
    data,
  };
}

export function addRestaurant(obj) {
  obj.type = 'ADD_RESTAURANT';
  return obj;
}

