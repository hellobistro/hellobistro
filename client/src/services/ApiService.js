// Import sibling services
import AuthService from './AuthService';

// Declare variables

const domain = 'http://localhost:3000';

// Create ApiService object
const ApiService = {
  // getRestaurantData: (id) => { console.log('fetching restaurant data'); return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); },

  // getRestaurantDataByUser: (id) => {
  //   return Auth.fetch(`/restaurants/${id}`, { method: 'GET' }); 
  // },

  async getRestaurantData(id) {
    return fetch(`${domain}/restaurants/${id}`).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });
  },

  getAnalytics(id) {
    return fetch(`${domain}/data/${id}`).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });

  },

  updateRestaurant(id, formValues) {
    return fetch(`${domain}/restaurants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
      return res.json();
    }).then((resJson) => {
      return resJson;
    });

  },

  removeOldMenu: (id) => {
    return fetch(`${domain}/restaurants/sections/items/${id}`, {
      method: 'DELETE',
    })
  },

  addNewMenuSection: (id, name, description) => {
    return fetch(`${domain}/restaurants/section/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description
      })
    })
  },

  addNewMenuItem: (id, name, price, vegan, vegetarian, glutenFree, spicy, image, prepTime, rating, status, menuSectionId) => {
    return fetch(`${domain}/restaurants/menu/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
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
    })
  },

  getOpenOrdersForRestaurant: (id) => {
    return fetch(`${domain}/restaurants/${id}/orders/open`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
  },

  completeOpenOrder: (id) => {
    //'/restaurants/:order_id'
    return fetch(`${domain}/restaurants/openorder/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
};

export default ApiService;
