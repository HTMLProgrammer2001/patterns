"use strict";
exports.__esModule = true;
var Hero_1 = require("./Hero");
var hero = new Hero_1["default"], history = [];
history.push(hero.save());
hero.shoot();
hero.shoot();
hero.die();
history.push(hero.save());
hero.shoot();
hero.die();
hero.restore(history.pop());
hero.restore(history.pop());