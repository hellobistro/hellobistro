export function increment() {
  return {
    type: 'INCREMENT_LIKES',
  };
}

export function addRestaurant(obj) {
  obj.type = 'ADD_RESTAURANT';
  return obj;
}

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
export function addUser(userId, userName) {
  return {
    type: 'ADD_USER',
    user: {
      userId,
      userName,
    },
  };
}

