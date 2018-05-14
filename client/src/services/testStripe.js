const StripeService = require('./StripeService');

// StripeService.createCustomer('test@test.com', 'test')
//   .then((err, customer) => {
//     console.log('returned from stripe', err, customer);
//   });

// StripeService.retrieveCustomer('cus_CqnUu5Yubn8DDh')
//   .then((err, customer) => {
//     console.log('returned from stripe', err, customer);
//   });

/** ADDING A CARD VIA UPDATE CUSTOMER WILL AUTOMATICALLY SET IT TO DEFAULT */
StripeService.addCreditCard('cus_CqnUu5Yubn8DDh', { source: 'tok_mastercard' })
  .then((err, customer) => {
    console.log('returned from stripe', err, customer);
  });

  StripeService.