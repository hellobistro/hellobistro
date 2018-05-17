// Import sibling services
import AuthService from './AuthService';

// Declare variables
const domain = 'http://localhost:3000';

// Declare ApiService object
const ApiService = {
  async getRestaurantData(id) {
    return AuthService.fetch(`/restaurants/${id}`);
  },

  getMenuData(id) {
    return AuthService.fetch(`/customers/view/${id}`);
  },

  getAnalytics(id) {
    return AuthService.fetch(`/data/${id}`);
  },

  updateRestaurant(id, formValues) {
    return AuthService.fetch(`/restaurants/${id}`, {
      method: 'PUT',
      body: formValues,
    });
  },


  removeOldMenu: (id) => AuthService.fetch(`/restaurants/sections/items/${id}`, {
      method: "DELETE"
    }),

  addNewMenuSection: (id, name, description) => AuthService.fetch(`/restaurants/section/${id}`, {
      method: "POST",
      body: {
        name,
        description
      }
    }),

  addNewMenuItem: (
    id,
    name,
    description,
    price,
    vegan,
    vegetarian,
    glutenFree,
    spicy,
    image,
    prepTime,
    rating,
    status,
    menuSectionId,
  ) => AuthService.fetch(`/restaurants/menu/${id}`, {
      method: "POST",
      body: {
        name,
        //description,
        price,
        vegan,
        vegetarian,
        glutenFree,
        spicy,
        image,
        prepTime,
        rating,
        status,
        menuSectionId
      }
    }),

  getOpenOrdersForRestaurant: (id) => AuthService.fetch(`/restaurants/${id}/orders/open`, {
      method: "GET",

    }),

  completeOpenOrder: id => fetch(`${domain}/restaurants/openorder/${id}`, { method: 'PATCH' }),

  submitOrder: orderData => AuthService.fetch(`/customers/${orderData.CustomerId}/orders`, { method: 'POST', body: orderData }),
  findRestaurants: () => AuthService.fetch('/customers/view', { method: 'GET' }),

  getCustomerProfile: id =>
    AuthService.fetch(`/customers/${id}`, {
      method: 'GET',
    }),

  updateCustomerProfile: (
    id,
    userName,
    email,
    firstName,
    lastName,
    phone,
    originalEmail,
    password,
  ) =>
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
      },
    }),

  retrieveOrders: id =>
    AuthService.fetch(`/customers/${id}/orders`, { method: 'GET' }),

  addPaymentMethod: dataObject => AuthService.fetch('/customers/payments', {
    method: 'POST',
    body: dataObject,
  }),

  retrievePaymentMethods: id => AuthService.fetch(`/customers/payments/${id}`, { method: 'GET' }),

  deletePaymentMethod: paymentId => AuthService.fetch(`/customers/payments/${paymentId}`, { method: 'DELETE' }),
};

export default ApiService;
