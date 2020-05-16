"use strict";
exports.__esModule = true;
var Newspaper = /** @class */ (function () {
    function Newspaper(name) {
        this.name = name;
        this.subscribers = [];
    }
    Newspaper.prototype.addObservers = function (observers) {
        this.subscribers = this.subscribers.concat(observers);
    };
    Newspaper.prototype.addObserver = function (observer) {
        this.subscribers.push(observer);
    };
    Newspaper.prototype.removeObserver = function (observer) {
        for (var i = 0; i < this.subscribers.length; i++)
            if (this.subscribers[i] == observer)
                this.subscribers.splice(i, 1);
    };
    Newspaper.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this);
        }
    };
    return Newspaper;
}());
exports["default"] = Newspaper;
