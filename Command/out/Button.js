"use strict";
exports.__esModule = true;
var NoneCommand_1 = require("./Commands/NoneCommand");
var Button = /** @class */ (function () {
    function Button(name) {
        this.name = name;
        this.comm = new NoneCommand_1["default"]();
    }
    ;
    Button.prototype.setCommand = function (newComm) {
        console.log(this.name + " was setted new command");
        this.comm = newComm;
    };
    Button.prototype.wasPressed = function () {
        console.log(this.name + " was pressed");
        this.comm.execute();
        this.comm = new NoneCommand_1["default"]();
    };
    return Button;
}());
exports["default"] = Button;
