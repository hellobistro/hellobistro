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

export function addUser(userId, userName) {
  return {
    type: 'ADD_USER',
    user: {
      userId,
      userName,
    },
  };
}

