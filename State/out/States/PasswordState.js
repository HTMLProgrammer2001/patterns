"use strict";
exports.__esModule = true;
var RaiseState_1 = require("./RaiseState");
var CardWithPassword_1 = require("../Card/CardWithPassword");
var PasswordState = /** @class */ (function () {
    function PasswordState(machine) {
        this.machine = machine;
    }
    PasswordState.prototype.insertCard = function (card) {
        console.log('Return old card at start');
    };
    PasswordState.prototype.typePassword = function (password) {
        var card = this.machine.getCard();
        if (card && card.checkPassword(password)) {
            this.machine.setCard(new CardWithPassword_1["default"](card, password));
            this.machine.setState(new RaiseState_1["default"](this.machine));
        }
        else
            console.log('Wrong password');
    };
    PasswordState.prototype.raise = function (cost) {
        console.log('No password was entered');
    };
    PasswordState.prototype.returnCard = function () {
        var card = this.machine.getCard();
        this.machine.setCard(null);
        console.log('Returned card');
        return card;
    };
    return PasswordState;
}());
exports["default"] = PasswordState;
