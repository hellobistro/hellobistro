import AuthService from './AuthService';

const ApiService = {
  submitOrder: (status, total, transaction, table, customerId, restaurantId, items) => AuthService.fetch(`/customers/${customerId}/orders`, {
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
  findRestaurants: () => AuthService.fetch('/restaurants', { method: 'GET' }),
  stripeProcessing: paymentId => new Promise(resolve => resolve({
    status: 'success',
    transactionId: 12345,
    paymentId,
  })),

  getCustomerProfile: (id) => (
    AuthService.fetch(`/customers/${id}`, {
      method: 'GET',
    })
  ),

  //userId, email, firstName, lastName, phone, originalEmail, newPW1
  updateCustomerProfile: (id, userName, email, firstName, lastName, phone, originalEmail, password) => 
    AuthService.fetch(`/customers/${id}/profile`, {
      method: 'PATCH',
      // headers: {
      //   'content-type': 'application/json'
      // },
      body: {
        email,
        userName,
        firstName,
        lastName,
        phone,
        password,
        originalEmail
      }
    }),
    
  retrieveOrders: id => Auth.fetch(`/customers/${id}/orders`, { method: 'GET' }),
};

export default ApiService;
