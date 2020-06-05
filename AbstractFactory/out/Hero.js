"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    function Hero(factory) {
        this.weapon = factory.createWeapon();
        this.movement = factory.createMovement();
    }
    Hero.prototype.move = function () {
        this.movement.move();
    };
    Hero.prototype.hit = function () {
        this.weapon.hit();
    };
    return Hero;
}());
exports["default"] = Hero;
