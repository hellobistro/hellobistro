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

  completeOpenOrder: (id) => 
    //'/restaurants/:order_id'
     fetch(`${domain}/restaurants/openorder/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
  ,

  submitOrder: (
    status,
    total,
    transactionId,
    table,
    CustomerId,
    RestaurantId,
    items,
  ) =>
    AuthService.fetch(`/customers/${CustomerId}/orders`, {
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
  findRestaurants: () => AuthService.fetch('/customers/view', { method: 'GET' }),
  stripeProcessing: paymentId =>
    new Promise(resolve =>
      resolve({
        status: 'success',
        transactionId: 12345,
        paymentId,
      }),),

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
};

export default ApiService;
