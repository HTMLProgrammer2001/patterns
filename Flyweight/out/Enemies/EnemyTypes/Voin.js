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
var IEnemyType_1 = require("./IEnemyType");
var Voin = /** @class */ (function (_super) {
    __extends(Voin, _super);
    function Voin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Voin';
        return _this;
    }
    Voin.prototype.getMaxHealth = function () {
        return 25;
    };
    Voin.prototype.getMaxDistance = function () {
        return 2;
    };
    Voin.prototype.getPower = function () {
        return 10;
    };
    Voin.prototype.getName = function () {
        return this.name;
    };
    return Voin;
}(IEnemyType_1["default"]));
exports["default"] = Voin;
