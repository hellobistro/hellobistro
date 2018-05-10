// Import sibling services
import AuthService from "./AuthService";

// Declare variables
const domain = "http://localhost:3000";

// Declare ApiService object
const ApiService = {
  async getRestaurantData(id) {
    return AuthService.fetch(`/restaurants/${id}`);
  },

  getAnalytics(id) {
    return AuthService.fetch(`/data/${id}`);
  },

  updateRestaurant(id, formValues) {
    return AuthService.fetch(`/restaurants/${id}`, {
      method: "PUT",
      body: formValues
    });
  },

  removeOldMenu: id => {
    return fetch(`${domain}/restaurants/sections/items/${id}`, {
      method: "DELETE"
    });
  },

  addNewMenuSection: (id, name, description) => {
    return fetch(`${domain}/restaurants/section/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        description
      })
    });
  },

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
    menuSectionId
  ) => {
    return fetch(`${domain}/restaurants/menu/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
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
      })
    });
  },

  getOpenOrdersForRestaurant: id => {
    return fetch(`${domain}/restaurants/${id}/orders/open`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    });
  },

  completeOpenOrder: (id, now) => {
    return fetch(`${domain}/restaurants/openorder/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        now
      })
    });
  },

  submitOrder: (
    status,
    total,
    transactionId,
    table,
    CustomerId,
    RestaurantId,
    items
  ) =>
    AuthService.fetch(`/customers/${CustomerId}/orders`, {
      method: "POST",
      body: {
        status,
        total,
        transactionId,
        table,
        CustomerId,
        RestaurantId,
        items
      }
    }),
  findRestaurants: () => AuthService.fetch("/restaurants", { method: "GET" }),
  stripeProcessing: paymentId =>
    new Promise(resolve =>
      resolve({
        status: "success",
        transactionId: 12345,
        paymentId
      })
    ),

  getCustomerProfile: id =>
    AuthService.fetch(`/customers/${id}`, {
      method: "GET"
    }),

  updateCustomerProfile: (
    id,
    userName,
    email,
    firstName,
    lastName,
    phone,
    originalEmail,
    password
  ) =>
    AuthService.fetch(`/customers/${id}/profile`, {
      method: "PATCH",
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

  retrieveOrders: id =>
    AuthService.fetch(`/customers/${id}/orders`, { method: "GET" })
};

export default ApiService;
