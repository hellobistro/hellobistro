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

  }
};

export default ApiService;
