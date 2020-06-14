"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    ;
    Square.prototype.draw = function () {
        console.log("Draw square with side " + this.side);
    };
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.accept = function (v) {
        return v.visitSquare(this);
    };
    return Square;
}());
exports["default"] = Square;
