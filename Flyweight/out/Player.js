"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player() {
        this.power = 10;
        this.health = 100;
    }
    Player.prototype.getPower = function () {
        return this.power;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.damage = function (d) {
        this.health -= d;
        return this.health;
    };
    Player.prototype.shoot = function (enemy) {
        enemy.damage(this);
    };
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    return Player;
}());
exports["default"] = Player;
