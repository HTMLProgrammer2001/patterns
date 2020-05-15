"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.setFly = function (flyBehave) {
        this.flyBehave = flyBehave;
    };
    Animal.prototype.fly = function () {
        this.flyBehave.fly(this.getName());
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports["default"] = Animal;
