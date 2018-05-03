// Import sibling services
import AuthService from './AuthService';

// Declare variables
const Auth = new AuthService();
const domain = 'http://localhost:3000';

// Create ApiService object
const ApiService = {
  // getRestaurantData: (id) => { console.log('fetching restaurant data'); return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); },

  // getRestaurantDataByUser: (id) => {
  //   return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); 
  // },

  async getRestaurantData(id) {
    return fetch(`${domain}/restaurants/${id}`).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });
  },

  getAnalytics(id) {
    return fetch(`${domain}/data/${id}`).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });

  },

  updateRestaurant(id, formValues) {
    return fetch(`${domain}/restaurants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });

  }
};

export default ApiService;
