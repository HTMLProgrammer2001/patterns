"use strict";
exports.__esModule = true;
var CommandHistory = /** @class */ (function () {
    function CommandHistory() {
        this.commands = [];
    }
    CommandHistory.getInstance = function () {
        if (!CommandHistory.instance)
            CommandHistory.instance = new CommandHistory();
        return CommandHistory.instance;
    };
    CommandHistory.prototype.addCommand = function (comm) {
        this.commands.push(comm);
    };
    CommandHistory.prototype.undoCommand = function () {
        if (this.commands.length)
            this.commands.pop().undo();
    };
    return CommandHistory;
}());
exports["default"] = CommandHistory;
