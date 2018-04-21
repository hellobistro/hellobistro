export function increment() {
    return {
      type: 'INCREMENT_LIKES'
    }
  }

  export function addCustomer(obj){
    obj.type = 'ADD_CUSTOMER'
    return obj;
  }