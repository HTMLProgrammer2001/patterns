"use strict";
exports.__esModule = true;
var PerimeterVisitor = /** @class */ (function () {
    function PerimeterVisitor() {
    }
    PerimeterVisitor.prototype.visitCircle = function (circle) {
        return 2 * Math.PI * circle.getRadius();
    };
    PerimeterVisitor.prototype.visitRectangle = function (rect) {
        return (rect.getHeight() + rect.getWidth()) * 2;
    };
    PerimeterVisitor.prototype.visitSquare = function (square) {
        return square.getSide() * 4;
    };
    return PerimeterVisitor;
}());
exports["default"] = PerimeterVisitor;
