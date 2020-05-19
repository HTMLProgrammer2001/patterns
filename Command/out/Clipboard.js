"use strict";
exports.__esModule = true;
var ClipboardApi = /** @class */ (function () {
    function ClipboardApi() {
        this.data = '';
    }
    ClipboardApi.getInstance = function () {
        if (!ClipboardApi.instance)
            ClipboardApi.instance = new ClipboardApi();
        return ClipboardApi.instance;
    };
    ClipboardApi.prototype.setData = function (data) {
        this.data = data;
    };
    ClipboardApi.prototype.getData = function () {
        return this.data;
    };
    return ClipboardApi;
}());
exports["default"] = ClipboardApi;
