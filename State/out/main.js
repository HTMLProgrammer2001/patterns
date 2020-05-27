"use strict";
exports.__esModule = true;
var Card_1 = require("./Card/Card");
var BankMachine_1 = require("./BankMachine");
var card = new Card_1["default"]('Yuri', 2000, '123456'), bankMachine = new BankMachine_1["default"];
bankMachine.typePassword('123456'); //will show error message
bankMachine.insertCard(card);
bankMachine.raise(1000); //will show error message
bankMachine.typePassword('14456'); //will show error message
bankMachine.typePassword('123456');
bankMachine.raise(1000);
bankMachine.returnCard();
