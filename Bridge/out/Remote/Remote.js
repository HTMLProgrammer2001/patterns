"use strict";
exports.__esModule = true;
var Remote = /** @class */ (function () {
    function Remote(device) {
        this.device = device;
    }
    ;
    Remote.prototype.toggle = function () {
        if (this.device.isEnabled())
            this.device.disable();
        else
            this.device.enable();
    };
    Remote.prototype.volumeDown = function () {
        var vol = this.device.getVolume();
        this.device.setVolume(vol - 10);
    };
    Remote.prototype.volumeUp = function () {
        var vol = this.device.getVolume();
        this.device.setVolume(vol + 10);
    };
    return Remote;
}());
exports["default"] = Remote;
