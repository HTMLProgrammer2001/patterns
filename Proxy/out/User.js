"use strict";
exports.__esModule = true;
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["MODERATOR"] = 1] = "MODERATOR";
    Roles[Roles["USER"] = 2] = "USER";
    Roles[Roles["ANONYM"] = 3] = "ANONYM";
})(Roles = exports.Roles || (exports.Roles = {}));
;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.role = Roles.ANONYM;
    }
    ;
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports["default"] = User;
