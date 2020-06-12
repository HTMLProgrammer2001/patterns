"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var IWidget_1 = require("./IWidget");
var EditWidget = /** @class */ (function (_super) {
    __extends(EditWidget, _super);
    function EditWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = '';
        return _this;
    }
    EditWidget.prototype.changeValue = function (newVal) {
        this.value = newVal;
        this.send();
    };
    EditWidget.prototype.getValue = function () {
        return this.value;
    };
    EditWidget.prototype.notify = function (msg) {
        if (msg == 'sended') {
            console.log('Dialog sended');
        }
        else if (msg == 'clear') {
            this.changeValue('');
            console.log('Edit was cleared');
        }
    };
    return EditWidget;
}(IWidget_1["default"]));
exports["default"] = EditWidget;
