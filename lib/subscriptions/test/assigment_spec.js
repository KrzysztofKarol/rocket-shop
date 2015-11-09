var assert = require("assert");
var Assignment = require("../models/assignment");
var Mission = require("../models/mission");
var Helpers = require("../helpers");
var _ = require("underscore");
var goodSpecs = {age: 40, height: 60, weight: 190};

describe("Assignments", function () {
    describe("commander with valid app", function () {
        var assignment;
        before(function () {
            assignment = new Assignment({
                passenger: goodSpecs,
                mission: new Mission({id: 1000}),
                role: "commander"
            });
        });
        it('compatible', function () {
            assert(assignment.passengerIsCompatible);
        });
    });

    describe("Commander overweight", function () {
        var assignment;
        before(function () {
            assignment = new Assignment({
                passenger: {weight: 300},
                mission: new Mission({id: 1000}),
                role: "commander"
            });
        });
        it('no compatibility', function () {
            assert(!assignment.passengerIsCompatible);
        });
    });

    describe("Commander too tall", function () {
        var assignment;
        before(function () {
            assignment = new Assignment({
                passenger: {height: 300},
                mission: new Mission({id: 1000}),
                role: "commander"
            });
        });
        it('no compatibility', function () {
            assert(!assignment.passengerIsCompatible);
        });
    })

});