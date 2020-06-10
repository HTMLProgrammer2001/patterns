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
var Elf = /** @class */ (function (_super) {
    __extends(Elf, _super);
    function Elf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Elf';
        return _this;
    }
    Elf.prototype.getMaxHealth = function () {
        return 10;
    };
    Elf.prototype.getMaxDistance = function () {
        return 5;
    };
    Elf.prototype.getPower = function () {
        return 5;
    };
    Elf.prototype.getName = function () {
        return this.name;
    };
    return Elf;
}(IEnemyType_1["default"]));
exports["default"] = Elf;
