"use strict";
exports.__esModule = true;
var CardWithPassword = /** @class */ (function () {
    function CardWithPassword(card, password) {
        this.card = card;
        this.password = password;
    }
    CardWithPassword.prototype.checkPassword = function (password) {
        return this.card.checkPassword(password);
    };
    CardWithPassword.prototype.getOwner = function () {
        return this.card.getOwner();
    };
    CardWithPassword.prototype.getCost = function () {
        return this.card.getCost(this.password);
    };
    CardWithPassword.prototype.raiseCost = function (cost) {
        return this.card.raiseCost(cost, this.password);
    };
    return CardWithPassword;
}());
exports["default"] = CardWithPassword;
