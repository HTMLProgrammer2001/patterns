"use strict";
exports.__esModule = true;
var CutCommand_1 = require("./CutCommand");
var PasteCommand_1 = require("./PasteCommand");
var ReplaceCommand = /** @class */ (function () {
    function ReplaceCommand(editor) {
        this.editor = editor;
        this.copyComm = new CutCommand_1["default"](this.editor);
        this.pasteComm = new PasteCommand_1["default"](this.editor);
    }
    ReplaceCommand.prototype.execute = function () {
        console.log("Replace text from " + this.editor.offset + " by " + this.editor.len + " characters");
        this.backup = this.editor.getText();
        this.copyComm.execute();
        this.pasteComm.execute();
        console.log(this.editor.getText());
    };
    ReplaceCommand.prototype.undo = function () {
        console.log("Undo replace");
        this.editor.setText(this.backup);
    };
    return ReplaceCommand;
}());
exports["default"] = ReplaceCommand;
