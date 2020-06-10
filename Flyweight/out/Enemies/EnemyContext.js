"use strict";
exports.__esModule = true;
var EnemyContext = /** @class */ (function () {
    function EnemyContext(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.health = type.getMaxHealth();
    }
    EnemyContext.prototype.getPosition = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    EnemyContext.prototype.getHealth = function () {
        return this.health;
    };
    EnemyContext.prototype.getDistance = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    EnemyContext.prototype.move = function (pl) {
        var oldPos = this.getPosition(), angle = Math.atan2(oldPos.y, oldPos.x) - Math.PI;
        this.x = Math.cos(angle) * 2 + oldPos.x;
        this.y = Math.sin(angle) * 2 + oldPos.y;
    };
    EnemyContext.prototype.draw = function () {
        this.type.draw(this);
    };
    EnemyContext.prototype.damage = function (pl) {
        this.health -= pl.getPower();
        return this.health;
    };
    EnemyContext.prototype.shoot = function (pl) {
        this.type.shoot(pl, this);
    };
    EnemyContext.prototype.isAlive = function () {
        return this.health > 0;
    };
    return EnemyContext;
}());
exports["default"] = EnemyContext;
