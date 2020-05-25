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
var Component_1 = require("./Component");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.files = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.files.reduce(function (acc, file) { return acc + file.getSize(); }, 0);
    };
    Folder.prototype.add = function (comp) {
        if (this.files.includes(comp))
            return;
        this.files.push(comp);
    };
    Folder.prototype.remove = function (comp) {
        var index = this.files.findIndex(function (file) { return file == comp; });
        if (!~index)
            return;
        this.files.splice(index, 1);
    };
    Folder.prototype.print = function () {
        console.log("Folder " + this.getName());
        this.files.forEach(function (file) {
            file.print();
        });
    };
    return Folder;
}(Component_1["default"]));
exports["default"] = Folder;
