"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.draw = function () {
        console.log("Draw rectangle with width " + this.width + " and height " + this.height);
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.accept = function (v) {
        return v.visitRectangle(this);
    };
    return Rectangle;
}());
exports["default"] = Rectangle;
