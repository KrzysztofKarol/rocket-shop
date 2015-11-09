var moment = require("moment");
var MissionControl = require("../models/mission_control");
var Mission = require("../models/mission");
var assert = require("assert");
var db = require("../db");
var sinon = require("sinon");

describe("Mission Planning", function () {
    var missionControl;
    before(function () {
        missionControl = new MissionControl({db: db});
        sinon.stub(db, "getMissionByLaunchDate").yields(null, null);
        sinon.stub(db, "createNextMission").yields(null, new Mission());
    });

    describe("No Current Mission", function () {
        var currentMission;
        before(function (done) {
            missionControl.currentMission(function (err, res) {
                currentMission = res;
                done();
            })
        });
        it("is created if none exist", function () {
            assert(currentMission);
            assert(db.getMissionByLaunchDate.called);
        });
    });

    describe("Current Mission Exists", function () {
        var currentMission;
        before(function (done) {
            db.getMissionByLaunchDate.restore(); // unwrap ip
            sinon.stub(db, "getMissionByLaunchDate").yields(null, {id: 1000});
            missionControl.currentMission(function (err, res) {
                currentMission = res;
                done();
            })
        });
        it("it returns mission 1000", function () {
            assert.equal(currentMission.id, 1000);
            assert(db.getMissionByLaunchDate.called);
        });
    });
});