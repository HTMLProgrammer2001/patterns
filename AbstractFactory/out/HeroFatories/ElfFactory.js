"use strict";
exports.__esModule = true;
var FlyMovement_1 = require("../Movements/FlyMovement");
var Arbalet_1 = require("../Weapons/Arbalet");
var ElfFactory = /** @class */ (function () {
    function ElfFactory() {
    }
    ElfFactory.prototype.createMovement = function () {
        return new FlyMovement_1["default"]();
    };
    ElfFactory.prototype.createWeapon = function () {
        return new Arbalet_1["default"]();
    };
    return ElfFactory;
}());
exports["default"] = ElfFactory;
