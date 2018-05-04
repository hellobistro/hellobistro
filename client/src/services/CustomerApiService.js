import AuthService from './AuthService';

const ApiService = {
  submitOrder: (status, total, transactionId, table, CustomerId, RestaurantId, items) => AuthService.fetch(`/customers/${CustomerId}/orders`, {
    method: 'POST',
    body: {
      status,
      total,
      transactionId,
      table,
      CustomerId,
      RestaurantId,
      items,
    },
  }),
  findRestaurants: () => AuthService.fetch('/restaurants', { method: 'GET' }),
  stripeProcessing: paymentId => new Promise(resolve => resolve({
    status: 'success',
    transactionId: 12345,
    paymentId,
  })),
  retrieveOrders: id => AuthService.fetch(`/customers/${id}/orders`, { method: 'GET' }),
};

export default ApiService;
