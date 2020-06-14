"use strict";
exports.__esModule = true;
var MultiplyExpression = /** @class */ (function () {
    function MultiplyExpression() {
    }
    MultiplyExpression.prototype.interpreter = function () {
        return this.left.interpreter() * this.right.interpreter();
    };
    MultiplyExpression.prototype.accept = function (char) {
        return char == '*';
    };
    MultiplyExpression.prototype.set = function (left, right) {
        this.left = left;
        this.right = right;
    };
    return MultiplyExpression;
}());
exports["default"] = MultiplyExpression;
