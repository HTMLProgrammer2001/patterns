"use strict";
exports.__esModule = true;
var CutCommand = /** @class */ (function () {
    function CutCommand(editor) {
        this.editor = editor;
    }
    CutCommand.prototype.execute = function () {
        console.log("Cut text from " + this.editor.offset + " by " + this.editor.len + " characters");
        this.backup = this.editor.getText();
        this.editor.cut();
        console.log(this.editor.getText());
    };
    CutCommand.prototype.undo = function () {
        console.log("Undo cut text from " + this.editor.offset + " by " + this.editor.len + " characters");
        this.editor.text = this.backup;
        console.log(this.editor.getText());
    };
    return CutCommand;
}());
exports["default"] = CutCommand;
