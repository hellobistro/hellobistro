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
    console.log('patch with ', id, formValues);
    return fetch(`${domain}/restaurants/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formValues),
    }).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });

  }
};

export default ApiService;
