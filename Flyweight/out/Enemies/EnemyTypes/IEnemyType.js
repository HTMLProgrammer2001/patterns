"use strict";
exports.__esModule = true;
var IEnemyType = /** @class */ (function () {
    function IEnemyType() {
    }
    IEnemyType.prototype.draw = function (ctx) {
        console.log(this.getName() + " with health(" + ctx.getHealth() + ") at " + JSON.stringify(ctx.getPosition()));
    };
    IEnemyType.prototype.shoot = function (pl, ctx) {
        if (ctx.getDistance() < this.getMaxDistance())
            pl.damage(this.getPower());
    };
    return IEnemyType;
}());
exports["default"] = IEnemyType;
