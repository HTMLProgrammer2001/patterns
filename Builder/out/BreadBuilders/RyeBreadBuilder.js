"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BreadBuilder_1 = require("./BreadBuilder");
var RyeBreadBuilder = /** @class */ (function (_super) {
    __extends(RyeBreadBuilder, _super);
    function RyeBreadBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RyeBreadBuilder.prototype.setFlour = function () {
        this.bread.flour = "Ржаная мука 1 сорт";
    };
    RyeBreadBuilder.prototype.setSalt = function () {
        this.bread.salt = true;
    };
    RyeBreadBuilder.prototype.setAdditives = function () {
        // не используется
    };
    return RyeBreadBuilder;
}(BreadBuilder_1["default"]));
exports["default"] = RyeBreadBuilder;
