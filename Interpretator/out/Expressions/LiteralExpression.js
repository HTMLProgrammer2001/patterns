"use strict";
exports.__esModule = true;
var LiteralExpression = /** @class */ (function () {
    function LiteralExpression(val) {
        this.val = val;
    }
    ;
    LiteralExpression.prototype.interpreter = function () {
        return +this.val;
    };
    LiteralExpression.prototype.accept = function (char) {
        return !!char.match(/[\d.]/);
    };
    LiteralExpression.prototype.set = function (left, right) { };
    return LiteralExpression;
}());
exports["default"] = LiteralExpression;
