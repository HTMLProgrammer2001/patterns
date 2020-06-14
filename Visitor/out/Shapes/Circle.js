"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    ;
    Circle.prototype.draw = function () {
        console.log("Draw circle with radius " + this.radius);
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.accept = function (v) {
        return v.visitCircle(this);
    };
    return Circle;
}());
exports["default"] = Circle;
