"use strict";
exports.__esModule = true;
var DialogMediator = /** @class */ (function () {
    function DialogMediator() {
    }
    DialogMediator.prototype.send = function (sender) {
        if (sender == this.edit)
            console.log("Changed edit to " + this.edit.getValue());
        if (sender == this.sendButton)
            this.edit.notify('sended');
        if (sender == this.clearButton)
            this.edit.notify('clear');
    };
    return DialogMediator;
}());
exports["default"] = DialogMediator;
