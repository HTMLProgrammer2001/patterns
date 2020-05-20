"use strict";
exports.__esModule = true;
var AnimalTransport = /** @class */ (function () {
    function AnimalTransport(animal) {
        this.animal = animal;
    }
    ;
    AnimalTransport.prototype.drive = function () {
        this.animal.run();
    };
    return AnimalTransport;
}());
exports["default"] = AnimalTransport;
