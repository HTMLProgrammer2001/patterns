"use strict";
exports.__esModule = true;
var CommandHistory_1 = require("../CommandHistory");
var HistoriableCommand = /** @class */ (function () {
    function HistoriableCommand(comm) {
        this.comm = comm;
        this.history = CommandHistory_1["default"].getInstance();
    }
    ;
    HistoriableCommand.prototype.execute = function () {
        this.comm.execute();
        this.history.addCommand(this.comm);
    };
    HistoriableCommand.prototype.undo = function () {
        this.comm.undo();
    };
    return HistoriableCommand;
}());
exports["default"] = HistoriableCommand;
