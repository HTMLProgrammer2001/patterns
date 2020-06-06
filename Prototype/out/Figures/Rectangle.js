"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.w = w;
        this.h = h;
    }
    ;
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.w, this.h);
    };
    Rectangle.prototype.getInfo = function () {
        console.log("Rectangle " + this.w + ":" + this.h);
    };
    return Rectangle;
}());
exports["default"] = Rectangle;
