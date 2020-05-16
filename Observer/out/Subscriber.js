"use strict";
exports.__esModule = true;
var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this.name = name;
    }
    Subscriber.prototype.update = function (newspaper) {
        console.log(this.name + " receive " + newspaper.name + " newspaper");
    };
    Subscriber.prototype.subscribe = function (newspaper) {
        newspaper.addObserver(this);
        console.log(this.name + " subscribe on the " + newspaper.name);
    };
    Subscriber.prototype.unsubscribe = function (newspaper) {
        newspaper.removeObserver(this);
        console.log(this.name + " unsubscribe from " + newspaper.name);
    };
    return Subscriber;
}());
exports["default"] = Subscriber;
