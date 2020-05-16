"use strict";
exports.__esModule = true;
var Subscriber_1 = require("./Subscriber");
var Newspaper_1 = require("./Newspaper");
var anna = new Subscriber_1["default"]('Anya'), yura = new Subscriber_1["default"]('Yura');
var newYorkTimes = new Newspaper_1["default"]('New York Times'), truth = new Newspaper_1["default"]('Truth');
anna.subscribe(newYorkTimes);
anna.subscribe(truth);
yura.subscribe(newYorkTimes);
newYorkTimes.notifyObservers();
truth.notifyObservers();
anna.unsubscribe(newYorkTimes);
newYorkTimes.notifyObservers();
truth.notifyObservers();
