"use strict";
exports.__esModule = true;
var RaiseState = /** @class */ (function () {
    function RaiseState(machine) {
        this.machine = machine;
    }
    RaiseState.prototype.insertCard = function (card) {
        console.log('Return old card at start');
    };
    RaiseState.prototype.typePassword = function (password) {
        console.log('Password already was typed');
    };
    RaiseState.prototype.raise = function (cost) {
        var card = this.machine.getCard();
        if (card.raiseCost(cost))
            console.log("Was raised $" + cost + " from card of " + card.getOwner());
        else
            console.log("Not enough money");
    };
    RaiseState.prototype.returnCard = function () {
        var card = this.machine.getCard();
        this.machine.setCard(null);
        console.log('Returned card');
        return card;
    };
    return RaiseState;
}());
exports["default"] = RaiseState;
