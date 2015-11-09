var MembershipApplication = require("../models/membership_application");

module.exports.validApplication = new MembershipApplication({
  first: "Test",
  last: "User",
  email: "test@test.com",
  age: 30,
  height: 66,
  weight: 180
});

exports.goodStripeResponse = function (args) {
  var plan = args.plan || "commander";

  return {
    id: 'cus_7JoYj8VgJYINdq',
    object: plan,
    account_balance: 0,
    created: 1447057341,
    currency: 'usd',
    default_source: 'card_175AuvJe6YCnY8TETqgvIcpw',
    delinquent: false,
    description: 'Test User',
    discount: null,
    email: 'test@test.com',
    livemode: false,
    metadata: {},
    shipping: null,
    sources: {
      object: 'list',
      data: [[Object]],
      has_more: false,
      total_count: 1,
      url: '/v1/customers/cus_7JoYj8VgJYINdq/sources'
    },
    subscriptions: {
      object: 'list',
      data: [[Object]],
      has_more: false,
      total_count: 1,
      url: '/v1/customers/cus_7JoYj8VgJYINdq/subscriptions'
    }
  }
};