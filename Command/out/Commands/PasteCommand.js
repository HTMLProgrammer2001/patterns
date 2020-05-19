"use strict";
exports.__esModule = true;
var PasteCommand = /** @class */ (function () {
    function PasteCommand(editor) {
        this.editor = editor;
    }
    PasteCommand.prototype.execute = function () {
        console.log("Paste to text from " + this.editor.offset);
        this.backup = this.editor.getText();
        this.editor.paste();
        console.log(this.editor.getText());
    };
    PasteCommand.prototype.undo = function () {
        console.log("Undo paste to text from " + this.editor.offset);
        this.editor.setText(this.backup);
        console.log(this.editor.getText());
    };
    return PasteCommand;
}());
exports["default"] = PasteCommand;
