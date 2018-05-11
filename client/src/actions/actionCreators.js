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
  console.log('adding to cart');
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
  return {
    type: 'LOAD_CUSTOMER',
    data,
  };
}

export function setRestaurant(id) {
  return {
    type: 'SET_RESTAURANT',
    id,
  };
}

export function loadOrders(data) {
  return {
    type: 'LOAD_ORDERS',
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

export function updateRestaurantData(data) {
  return {
    type: 'UPDATE_RESTAURANT_DATA',
    data,
  };
}

export function updateAnalyticsData(data) {
  return {
    type: 'UPDATE_ANALYTICS_DATA',
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

export function updateTable(tableNumber) {
  return {
    type: 'UPDATE_TABLE',
    tableNumber,
  };
}

