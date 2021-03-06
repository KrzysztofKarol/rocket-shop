var assert = require("assert");

var Billing = function (args) {
  assert(args.stripeKey, "Need a stripe key");
  var stripe = require("stripe")(args.stripeKey);

  this.createSubscription = function (args, next) {
    // We need an email, name, plan, card or card token
    assert(args.email && args.name && args.card && args.plan);
    // Send off to stripe
    stripe.customers.create({
      email: args.email,
      description: args.name,
      card: args.card,
      plan: args.plan
    }, next);
  };

  this.cancelSubscription = function (args, next) {

  };

  this.changeSubscription = function (args, next) {

  };
};

module.exports = Billing;