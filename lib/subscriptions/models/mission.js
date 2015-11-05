var moment = require("moment");
var assert = require("assert");

var Mission = function (args) {
    args = args || {};

    var mission = {
        status: "open", // open, closed, cancelled
        commander: args.commander || null,
        MAVpilot: args.MAVPilot || null,
        colonists: args.colonists || [],
        tourists: args.tourists || [],
        // default to next month on the first
        launchDate: args.launchDate || (moment().add(1, "month").startOf("month").format("MM-DD-YYYY"))
    };

    mission.needsRole = function (role) {
        var needed = false;
        if (!this.isFlying()) {
            return false;
        }
        switch (role) {
            case "mission-commander":
                needed = !this.commander;
                break;
            case "mav-pilot":
                needed = !this.MAVpilot;
                break;
            case "colonist":
                needed = !this.colonists.length <= 10;
                break;
            case "space-tourists":
                needed = !this.tourists.length <= 20;
                break;
        }
        return needed;
    };


    mission.assignRole = function (args) {
        assert.ok(args.user && args.role, "Need a user and role in order to assing");
        var role = args.role;
        var user = args.user;

        switch (role) {
            case "mission-commander":
                this.commander = user;
                break;
            case "mav-pilot":
                this.MAVpilot = user;
                break;
            case "colonist":
                this.colonists.push(user);
                break;
            case "space-tourists":
                this.tourists.push(user);
                break;
        }
        return this;
    };

    mission.isFlying = function () {
        return this.status === "open";
    };
};

module.exports = Mission;