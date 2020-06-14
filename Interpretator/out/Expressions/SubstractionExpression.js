"use strict";
exports.__esModule = true;
var SubstractionExpression = /** @class */ (function () {
    function SubstractionExpression() {
    }
    SubstractionExpression.prototype.interpreter = function () {
        return this.left.interpreter() - this.right.interpreter();
    };
    SubstractionExpression.prototype.accept = function (char) {
        return char == '-';
    };
    SubstractionExpression.prototype.set = function (left, right) {
        this.left = left;
        this.right = right;
    };
    return SubstractionExpression;
}());
exports["default"] = SubstractionExpression;
