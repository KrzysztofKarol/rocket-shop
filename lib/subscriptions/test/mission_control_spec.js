var moment = require("moment");
var assert = require("assert");
var db = require("../db");
var sinon = require("sinon");
var MissionControl = require("../models/mission_control");
var missionControl = new MissionControl({db: db});

sinon.stub(db, "find").yields(null, {id: 1});

describe("Mission Control", function () {
    describe("The Current Mission", function () {
        var currentMission;
        before(function (done) {
            missionControl.currentMission(function (err, res) {
                currentMission = res;
                done();
            })
        });
        it("is created if none exist", function () {
            assert(currentMission);
        });
    });
});