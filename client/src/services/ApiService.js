// Import sibling services
import AuthService from './AuthService';

// Declare variables
const Auth = new AuthService();
const domain = 'http://localhost:3000';

// Create ApiService object
const ApiService = {
  getRestaurantData: (id) => { console.log('fetching restaurant data'); return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); },

  getRestaurantDataByUser: (id) => {
    return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); 
  },

  getAnalytics(id) {

    fetch(`${domain}/data/${id}`).then((response) => {
      return response.json();
    }).then((resJson) => {
      console.log(resJson);
    }).catch((err) => {
      console.log(err);
    });

  },

  removeOldMenu: (id) => {
    return fetch(`${domain}/restaurants/sections/items/${id}`, {
      method: 'DELETE',
    })
  },

  addNewMenuSection: (id, name, description) => {
    return fetch(`${domain}'/restaurants/section/${id}`, {
      method: 'POST',
      name,
      description,
    })
  },

  addNewMenuItem: (id, name, price, vegan, vegetarian, glutenFree, spicy, image, prepTime, rating) => {
    return fetch(`${domain}'/restaurants/menu/${id}`, {
      method: 'POST',
      name,
      price,
      vegan,
      vegetarian,
      glutenFree,
      spicy,
      image,
      prepTime,
      rating,
    })
  }
};

export default ApiService;
