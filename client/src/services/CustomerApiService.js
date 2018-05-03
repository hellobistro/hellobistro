import AuthService from './AuthService';

const Auth = new AuthService();

const ApiService = {
  submitOrder: (status, total, transactionId, table, CustomerId, RestaurantId, items) => Auth.fetch(`/customers/${CustomerId}/orders`, {
    method: 'POST',
    body: JSON.stringify({
      status,
      total,
      transactionId,
      table,
      CustomerId,
      RestaurantId,
      items,
    }),
  }),
  findRestaurants: () => Auth.fetch('/restaurants', { method: 'GET' }),
  stripeProcessing: paymentId => new Promise(resolve => resolve({
    status: 'success',
    transactionId: 12345,
    paymentId,
  })),
  retrieveOrders: id => Auth.fetch(`/customers/${id}/orders`, { method: 'GET' }),
};

export default ApiService;
