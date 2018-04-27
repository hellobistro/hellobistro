import AuthService from './AuthService';
const Auth = new AuthService();

const ApiService = {
  getRestaurantData: (id) => { console.log('fetching restaurant data'); return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); },
};

export default ApiService;
