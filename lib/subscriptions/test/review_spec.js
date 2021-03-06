var assert = require("assert");
var ReviewProcess = require("../processes/review");
var MembershipApplication = require("../models/membership_application");
var Helpers = require("../helpers");
var sinon = require("sinon");

describe("The Review Process", function () {

    describe("Receiving a valid application", function () {
        var decision;
        var validApp = Helpers.validApplication;
        var review = new ReviewProcess();
        var validationSpy = sinon.spy();
        var missionSpy = sinon.spy();
        var roleAvailableSpy = sinon.spy();
        var roleCompatibleSpy = sinon.spy();

        before(function (done) {
            review.on("validated", validationSpy);
            review.on("mission-selected", missionSpy);
            review.on("role-available", roleAvailableSpy);
            review.on("role-compatible", roleCompatibleSpy);

            review.processApplication(validApp, function (err, result) {
                decision = result;
                done();
            });
        });

        it("return success", function () {
            assert(decision.success, decision.message);
        });

        it("ensures tha application is valid", function () {
            assert(validationSpy.called);
        });

        it("selects a mission", function () {
            assert(missionSpy.called);
        });

        it("ensures a role exists", function () {
            assert(roleAvailableSpy.called);
        });

        it("ensures role compatibility", function () {
            assert(roleCompatibleSpy.called);
        });
    });

});