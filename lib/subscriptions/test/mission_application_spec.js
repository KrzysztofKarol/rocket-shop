var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe("Membership application requirements", function() {
	var validApp;
	before(function() {
		// Arrange the data here
		validApp = new MembershipApplication({
			first: "Test",
			last: "User",
			email: "test@test.com",
			age: 30,
			height: 66,
			weight: 180
		});
	});

	describe("Application valid if...", function() {
		it("all validators successful", function () {
			assert(validApp.isValid(), "Not valid");
		});
		it("email is 4 or more chars and contains an @", function() {
			assert(validApp.emailIsValid());
		});
		it("height is between 60 and 75 inches", function() {
			assert(validApp.heightIsValid());
		});
		it("age is between 15 and 100", function() {
			assert(validApp.ageIsValid());
		});
		it("weight is between 100 and 300", function() {
			assert(validApp.weightIsValid());
		});
		it("first and last name are provided", function() {
			assert(validApp.nameIsValid());
		});
	});
	describe("Application invalid if...", function() {
		it("email is 4 characters or less", function() {
			var app = new MembershipApplication({email: "dd"});
			assert(!app.emailIsValid());
		});
		it("email does not contain @", function() {
			var app = new MembershipApplication({email: "thingthingthing:thing.com"});
			assert(!app.emailIsValid());
		});
		it("email is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});

		it("height is less than 60 inches", function() {
			var app = new MembershipApplication({height: 59});
			assert(!app.emailIsValid());
		});
		it("height is more than 75 inches", function() {
			var app = new MembershipApplication({height: 76});
			assert(!app.emailIsValid());
		});
		it("height is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});

		
		it("age is less than 15", function() {
			var app = new MembershipApplication({age: 14});
			assert(!app.emailIsValid());
		});
		it("age is more than 100", function() {
			var app = new MembershipApplication({age: 101});
			assert(!app.emailIsValid());
		});
		it("age is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});

		it("weight is less than 100", function() {
			var app = new MembershipApplication({weight: 99});
			assert(!app.emailIsValid());
		});
		it("weight is more than 300", function() {
			var app = new MembershipApplication({weight: 301});
			assert(!app.emailIsValid());
		});
		it("weight is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});

		it("first is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});

		it("last is ommited", function() {
			var app = new MembershipApplication();
			assert(!app.emailIsValid());
		});	
	})
});