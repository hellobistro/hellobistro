import AuthService from './AuthService';

const ApiService = {
  submitOrder: (status, total, transaction, table, customerId, restaurantId, items) => AuthService.fetch(`/customers/${customerId}/orders`, {
    method: 'POST',
    body: JSON.stringify({
      status,
      total,
      transaction,
      table,
      customerId,
      restaurantId,
      items,
    }),
  }),
  findRestaurants: () => AuthService.fetch('/restaurants', { method: 'GET' }),
  stripeProcessing: paymentId => new Promise(resolve => resolve({
    status: 'success',
    transactionId: 12345,
    paymentId,
  })),
};

export default ApiService;
