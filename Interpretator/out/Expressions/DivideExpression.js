"use strict";
exports.__esModule = true;
var DivideExpression = /** @class */ (function () {
    function DivideExpression() {
    }
    DivideExpression.prototype.interpreter = function () {
        return this.left.interpreter() / this.right.interpreter();
    };
    DivideExpression.prototype.accept = function (char) {
        return char == '/';
    };
    DivideExpression.prototype.set = function (left, right) {
        this.left = left;
        this.right = right;
    };
    return DivideExpression;
}());
exports["default"] = DivideExpression;
