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
var Remote_1 = require("./Remote");
var AdvancedRemote = /** @class */ (function (_super) {
    __extends(AdvancedRemote, _super);
    function AdvancedRemote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedRemote.prototype.mute = function () {
        this.device.setVolume(0);
    };
    return AdvancedRemote;
}(Remote_1["default"]));
exports["default"] = AdvancedRemote;
