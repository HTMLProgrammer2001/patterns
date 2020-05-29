"use strict";
exports.__esModule = true;
var Application = /** @class */ (function () {
    function Application(user) {
        this.user = user;
    }
    ;
    Application.prototype.view = function () {
        console.log(this.user.getName() + " view content");
    };
    Application.prototype.edit = function () {
        console.log(this.user.getName() + " edit content");
    };
    Application.prototype.changeSettings = function () {
        console.log(this.user.getName() + " change settings");
    };
    Application.prototype.getUser = function () {
        return this.user;
    };
    return Application;
}());
exports["default"] = Application;
