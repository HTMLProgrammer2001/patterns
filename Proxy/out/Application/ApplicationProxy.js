"use strict";
exports.__esModule = true;
var User_1 = require("../User");
var ApplicationProxy = /** @class */ (function () {
    function ApplicationProxy(app) {
        this.app = app;
    }
    ;
    ApplicationProxy.prototype.view = function () {
        var user = this.app.getUser();
        if (user && user.getRole() <= User_1.Roles.USER)
            this.app.view();
        else
            console.log("Access to view page is denied");
    };
    ApplicationProxy.prototype.edit = function () {
        var user = this.app.getUser();
        if (user && user.getRole() <= User_1.Roles.MODERATOR)
            this.app.edit();
        else
            console.log("Access to edit page is denied");
    };
    ApplicationProxy.prototype.changeSettings = function () {
        var user = this.app.getUser();
        if (user && user.getRole() <= User_1.Roles.ADMIN)
            this.app.changeSettings();
        else
            console.log("Access to change settings is denied");
    };
    ApplicationProxy.prototype.getUser = function () {
        return this.app.getUser();
    };
    return ApplicationProxy;
}());
exports["default"] = ApplicationProxy;
