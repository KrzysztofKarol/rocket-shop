var stripe = require("stripe")(
    "sk_test_ZbljpHKClz9GbHQxI304VnoE"
);

stripe.customers.create({
  email: "test@test.com",
  description: "Test User",
  card: {
    name: "Test User",
    number: "4111111111111111",
    exp_month: 10,
    exp_year: 2019
  },
  plan: "commander"
}, function(err, customer) {
  console.log(err);
  console.log(customer);
  // asynchronously called
});