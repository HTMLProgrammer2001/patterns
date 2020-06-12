"use strict";
exports.__esModule = true;
var HeroMemento_1 = require("./HeroMemento");
var Hero = /** @class */ (function () {
    function Hero() {
        this.patrons = 10;
        this.lives = 3;
    }
    Hero.prototype.shoot = function () {
        if (this.patrons > 0)
            this.patrons--;
        console.log("You have " + this.patrons + " patrons");
        console.log('');
    };
    Hero.prototype.die = function () {
        if (this.lives > 0)
            this.lives--;
        console.log("You have " + this.lives + " lives");
        console.log('');
    };
    Hero.prototype.save = function () {
        return new HeroMemento_1["default"](this.patrons, this.lives);
    };
    Hero.prototype.restore = function (m) {
        this.patrons = m.patrons;
        this.lives = m.lives;
        console.log("You have " + this.lives + " lives");
        console.log("You have " + this.patrons + " patrons");
        console.log('');
    };
    return Hero;
}());
exports["default"] = Hero;
