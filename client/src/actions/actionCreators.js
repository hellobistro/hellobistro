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

export function clearCart() {
  return {
    type: 'CLEAR_CART',
  };
}

export function loadCustomerUser(data) {
  console.log('loading customer user', data)
  return {
    type: 'LOAD_CUSTOMER',
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

export function addUser(userId, userName) {
  return {
    type: 'ADD_USER',
    data: {
      userId,
      userName,
    },
  };
}

