import AuthService from './AuthService';
const Auth = new AuthService();

const ApiService = {
  submitOrder: (customerId, restaurantId, table, transactionId, total, orderItems) => Auth.fetch(`/customers/${customerId}/orders`, { 
    method: 'POST',
    body: {
      restaurantId,
      table,
      transactionId,
      total,
      orderItems,
    },
  }),
  findRestaurants: () => Auth.fetch('/restaurants', { method: 'GET' }),
  
};

export default ApiService;
