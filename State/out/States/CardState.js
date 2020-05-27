"use strict";
exports.__esModule = true;
var PasswordState_1 = require("./PasswordState");
var CardState = /** @class */ (function () {
    function CardState(machine) {
        this.machine = machine;
    }
    CardState.prototype.insertCard = function (card) {
        this.machine.setCard(card);
        this.machine.setState(new PasswordState_1["default"](this.machine));
    };
    CardState.prototype.typePassword = function (password) {
        console.log('Insert card at first');
    };
    CardState.prototype.raise = function (cost) {
        console.log('No card');
    };
    CardState.prototype.returnCard = function () {
        console.log('No card to return');
        return;
    };
    return CardState;
}());
exports["default"] = CardState;
