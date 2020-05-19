"use strict";
exports.__esModule = true;
var CopyCommand = /** @class */ (function () {
    function CopyCommand(editor) {
        this.editor = editor;
    }
    CopyCommand.prototype.execute = function () {
        console.log("Copy text from " + this.editor.offset + " by " + this.editor.len + " characters");
        console.log(this.editor.copy());
    };
    CopyCommand.prototype.undo = function () { };
    return CopyCommand;
}());
exports["default"] = CopyCommand;
