"use strict";
exports.__esModule = true;
var Transport = /** @class */ (function () {
    function Transport() {
    }
    Transport.prototype.deliver = function (distance) {
        var hours = distance / this.getSpeed();
        console.log(this.getName() + " deliver by " + hours + " hours");
    };
    return Transport;
}());
exports["default"] = Transport;
