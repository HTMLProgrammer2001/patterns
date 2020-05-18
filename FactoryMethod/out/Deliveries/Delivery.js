"use strict";
exports.__esModule = true;
var Delivery = /** @class */ (function () {
    function Delivery() {
        this.distance = 0;
    }
    Delivery.prototype.setDistance = function (d) {
        this.distance = d;
    };
    Delivery.prototype.getDistance = function () {
        return this.distance;
    };
    Delivery.prototype.deliver = function () {
        var transport = this.createTransport();
        transport.deliver(this.distance);
    };
    return Delivery;
}());
exports["default"] = Delivery;
