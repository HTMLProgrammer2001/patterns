"use strict";
exports.__esModule = true;
var Programmer = /** @class */ (function () {
    function Programmer(ide) {
        this.ide = ide;
    }
    ;
    Programmer.prototype.createApplication = function () {
        this.ide.start();
        this.ide.stop();
    };
    return Programmer;
}());
exports["default"] = Programmer;
