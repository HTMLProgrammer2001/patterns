"use strict";
exports.__esModule = true;
var AdditionalExpression = /** @class */ (function () {
    function AdditionalExpression() {
    }
    AdditionalExpression.prototype.interpreter = function () {
        return this.left.interpreter() + this.right.interpreter();
    };
    AdditionalExpression.prototype.accept = function (char) {
        return char == '+';
    };
    AdditionalExpression.prototype.set = function (left, right) {
        this.left = left;
        this.right = right;
    };
    return AdditionalExpression;
}());
exports["default"] = AdditionalExpression;
