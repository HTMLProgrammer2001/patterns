"use strict";
exports.__esModule = true;
var CommandHistory_1 = require("../CommandHistory");
var UndoCommand = /** @class */ (function () {
    function UndoCommand() {
        this.history = CommandHistory_1["default"].getInstance();
    }
    UndoCommand.prototype.execute = function () {
        this.history.undoCommand();
    };
    UndoCommand.prototype.undo = function () { };
    return UndoCommand;
}());
exports["default"] = UndoCommand;
