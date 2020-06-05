"use strict";
exports.__esModule = true;
var RunMovement_1 = require("../Movements/RunMovement");
var Sword_1 = require("../Weapons/Sword");
var VoinFactory = /** @class */ (function () {
    function VoinFactory() {
    }
    VoinFactory.prototype.createMovement = function () {
        return new RunMovement_1["default"]();
    };
    VoinFactory.prototype.createWeapon = function () {
        return new Sword_1["default"]();
    };
    return VoinFactory;
}());
exports["default"] = VoinFactory;
