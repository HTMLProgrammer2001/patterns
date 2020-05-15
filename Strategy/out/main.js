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
var Animal_1 = require("./Animal");
var FlyWithWings_1 = require("./Fly/FlyWithWings");
var NoFly_1 = require("./Fly/NoFly");
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(name) {
        var _this = _super.call(this, name) || this;
        _this.flyBehave = new FlyWithWings_1["default"]();
        return _this;
    }
    return Duck;
}(Animal_1["default"]));
var duck = new Duck('Ira');
duck.fly();
duck.setFly(new NoFly_1["default"]());
duck.fly();
