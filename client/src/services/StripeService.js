const stripe = require('stripe')('sk_test_sJWgvI2cFmxaSynpc6s5bgh5');


// Declare StripeService object
const StripeService = {
  createCustomer: email => stripe.customers.create({
    description: 'HelloBistroTest',
    email,
  }, (err, customer) => {
    console.log('returned from stripe', err, customer);
  }),
  retrieveCustomer: stripeCustomerId => stripe.customers.retrieve(stripeCustomerId),
  updateCustomer: (stripeCustomerId, options) => stripe.customers.update(stripeCustomerId, options),
  addCreditCard: (stripeCustomerId, options) => stripe.customers.createSource(stripeCustomerId, options),
  retrieveCards: stripeCustomerId => stripe.customers.listCards(stripeCustomerId),
  createCharge: (stripeCustomerId, cardId, amount, description) => stripe.charges.create({
    stripeCustomerId,
    amount,
    cardId,
    currency: 'usd',
    description,
  }),
};

module.exports = StripeService;
