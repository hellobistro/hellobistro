import AuthService from './AuthService';

const Auth = new AuthService();

const ApiService = {
  submitOrder: (status, total, transaction, table, customerId, restaurantId, items) => Auth.fetch(`/customers/${customerId}/orders`, {
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
  findRestaurants: () => Auth.fetch('/restaurants', { method: 'GET' }),
  stripeProcessing: paymentId => new Promise(resolve => resolve({
    status: 'success',
    transactionId: 12345,
    paymentId,
  })),
};

export default ApiService;
