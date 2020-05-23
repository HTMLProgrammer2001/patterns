"use strict";
exports.__esModule = true;
var Import = /** @class */ (function () {
    function Import(filename) {
        this.filename = filename;
    }
    Import.prototype["import"] = function () {
        this.openFile();
        this.readFile();
        var data = this.parseData();
        this.importItems(data);
    };
    Import.prototype.importItems = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var elem = items_1[_i];
            console.log("Import " + elem);
        }
    };
    return Import;
}());
exports["default"] = Import;
