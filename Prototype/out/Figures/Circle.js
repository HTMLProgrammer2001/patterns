"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.r = r;
    }
    ;
    Circle.prototype.clone = function () {
        return new Circle(this.r);
    };
    Circle.prototype.getInfo = function () {
        console.log("Circle with radius " + this.r);
    };
    return Circle;
}());
exports["default"] = Circle;
