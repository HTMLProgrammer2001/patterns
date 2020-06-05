"use strict";
exports.__esModule = true;
var Bread = /** @class */ (function () {
    function Bread() {
        this.salt = false;
        this.additives = 'Нет';
    }
    Bread.prototype.printComponents = function () {
        console.log(this.flour, this.salt, this.additives);
    };
    return Bread;
}());
exports["default"] = Bread;
