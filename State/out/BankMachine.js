"use strict";
exports.__esModule = true;
var CardState_1 = require("./States/CardState");
var BankMachine = /** @class */ (function () {
    function BankMachine() {
        this.state = new CardState_1["default"](this);
    }
    BankMachine.prototype.insertCard = function (card) {
        this.state.insertCard(card);
    };
    BankMachine.prototype.typePassword = function (password) {
        this.state.typePassword(password);
    };
    BankMachine.prototype.raise = function (cost) {
        this.state.raise(cost);
    };
    BankMachine.prototype.setState = function (state) {
        this.state = state;
    };
    BankMachine.prototype.returnCard = function () {
        return this.state.returnCard();
    };
    BankMachine.prototype.setCard = function (card) {
        this.card = card;
    };
    BankMachine.prototype.getCard = function () {
        return this.card;
    };
    return BankMachine;
}());
exports["default"] = BankMachine;
