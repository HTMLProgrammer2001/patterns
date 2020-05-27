"use strict";
exports.__esModule = true;
var Card = /** @class */ (function () {
    function Card(owner, cost, password) {
        this.owner = owner;
        this.cost = cost;
        this.password = password;
    }
    Card.prototype.checkPassword = function (password) {
        return this.password == password;
    };
    Card.prototype.getOwner = function () {
        return this.owner;
    };
    Card.prototype.getCost = function (password) {
        return this.checkPassword(password) ? this.cost : null;
    };
    Card.prototype.raiseCost = function (cost, password) {
        if (this.checkPassword(password) && this.cost > cost) {
            this.cost -= cost;
            return true;
        }
    };
    return Card;
}());
exports["default"] = Card;
