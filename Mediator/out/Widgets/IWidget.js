"use strict";
exports.__esModule = true;
var IWidget = /** @class */ (function () {
    function IWidget(mediator) {
        this.mediator = mediator;
    }
    IWidget.prototype.send = function () {
        this.mediator.send(this);
    };
    return IWidget;
}());
exports["default"] = IWidget;
