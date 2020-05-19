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
var Transport_1 = require("./Transport");
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Train.prototype.getName = function () {
        return 'Train';
    };
    Train.prototype.getSpeed = function () {
        return 100;
    };
    return Train;
}(Transport_1["default"]));
exports["default"] = Train;