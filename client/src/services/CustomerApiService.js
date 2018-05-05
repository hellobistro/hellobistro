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

  getCustomerProfile: id => (
    AuthService.fetch(`/customers/${id}`, {
      method: 'GET',
    })
  ),

  updateCustomerProfile: (id, userName, email, firstName, lastName, phone, originalEmail, password) =>
    AuthService.fetch(`/customers/${id}/profile`, {
      method: 'PATCH',
      body: {
        email,
        userName,
        firstName,
        lastName,
        phone,
        password,
        originalEmail,
      }
    }),

  retrieveOrders: id => AuthService.fetch(`/customers/${id}/orders`, { method: 'GET' }),
};

export default ApiService;

