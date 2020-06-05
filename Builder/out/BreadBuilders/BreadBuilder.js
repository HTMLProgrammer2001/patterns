"use strict";
exports.__esModule = true;
var Bread_1 = require("../Bread");
var BreadBuilder = /** @class */ (function () {
    function BreadBuilder() {
    }
    BreadBuilder.prototype.createBread = function () {
        this.bread = new Bread_1["default"]();
    };
    return BreadBuilder;
}());
exports["default"] = BreadBuilder;
