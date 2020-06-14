"use strict";
exports.__esModule = true;
var AreaVisitor = /** @class */ (function () {
    function AreaVisitor() {
    }
    AreaVisitor.prototype.visitCircle = function (circle) {
        return Math.PI * Math.pow(circle.getRadius(), 2);
    };
    AreaVisitor.prototype.visitRectangle = function (rect) {
        return rect.getHeight() * rect.getWidth();
    };
    AreaVisitor.prototype.visitSquare = function (square) {
        return Math.pow(square.getSide(), 2);
    };
    return AreaVisitor;
}());
exports["default"] = AreaVisitor;
