"use strict";
exports.__esModule = true;
var Clipboard_1 = require("./Clipboard");
var Editor = /** @class */ (function () {
    function Editor(text) {
        this.text = text;
        this.offset = 0;
        this.len = 0;
        this.clipboard = Clipboard_1["default"].getInstance();
    }
    Editor.prototype.cut = function () {
        this.text = this.text.slice(0, this.offset) + this.text.slice(this.offset + this.len);
    };
    Editor.prototype.copy = function () {
        var data = this.text.substr(this.offset, this.len);
        this.clipboard.setData(data);
        return data;
    };
    Editor.prototype.paste = function () {
        this.text = this.text.slice(0, this.offset) + this.clipboard.getData() + this.text.slice(this.offset);
        this.clipboard.setData('');
    };
    Editor.prototype.getText = function () {
        return this.text;
    };
    Editor.prototype.setText = function (newText) {
        this.text = newText;
    };
    Editor.prototype.setRange = function (offset, end) {
        this.offset = offset;
        this.len = end - offset;
    };
    return Editor;
}());
exports["default"] = Editor;
