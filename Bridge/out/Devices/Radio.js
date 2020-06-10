"use strict";
exports.__esModule = true;
var Radio = /** @class */ (function () {
    function Radio() {
        this.enabled = false;
        this.volume = 50;
    }
    Radio.prototype.isEnabled = function () {
        return this.enabled;
    };
    Radio.prototype.enable = function () {
        console.log('Enable radio');
        this.enabled = true;
    };
    Radio.prototype.disable = function () {
        console.log('Disable radio');
        this.enabled = false;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.setVolume = function (v) {
        console.log("Set volume to " + v);
        if (v >= 0 && v <= 100)
            this.volume = v;
    };
    return Radio;
}());
exports["default"] = Radio;
