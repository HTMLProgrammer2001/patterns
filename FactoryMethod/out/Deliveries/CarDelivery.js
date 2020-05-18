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
var Delivery_1 = require("./Delivery");
var Car_1 = require("../Transport/Car");
var CarDelivery = /** @class */ (function (_super) {
    __extends(CarDelivery, _super);
    function CarDelivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarDelivery.prototype.createTransport = function () {
        return new Car_1["default"]();
    };
    return CarDelivery;
}(Delivery_1["default"]));
exports["default"] = CarDelivery;
