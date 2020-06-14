"use strict";
exports.__esModule = true;
var LiteralExpression_1 = require("./Expressions/LiteralExpression");
var AdditionalExpression_1 = require("./Expressions/AdditionalExpression");
var SubstractionExpression_1 = require("./Expressions/SubstractionExpression");
var MultiplyExpression_1 = require("./Expressions/MultiplyExpression");
var DivideExpression_1 = require("./Expressions/DivideExpression");
var Executor = /** @class */ (function () {
    function Executor() {
        this.expressions = [new AdditionalExpression_1["default"], new SubstractionExpression_1["default"],
            new MultiplyExpression_1["default"], new DivideExpression_1["default"]];
    }
    Executor.prototype.execute = function (context) {
        var curIndex = context.length - 1, val = '';
        console.log(context);
        while (curIndex >= 0)
            if (context[curIndex].match(/[\d.]/))
                val += context[curIndex--];
            else
                for (var _i = 0, _a = this.expressions; _i < _a.length; _i++) {
                    var expr = _a[_i];
                    if (expr.accept(context[curIndex])) {
                        expr.set(this.execute(context.slice(0, curIndex)), new LiteralExpression_1["default"](val.split('').reverse().join('')));
                        return expr;
                    }
                }
        if (val)
            return new LiteralExpression_1["default"](val.split('').reverse().join(''));
    };
    return Executor;
}());
exports["default"] = Executor;
