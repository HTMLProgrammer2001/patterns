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
var Import_1 = require("./Import");
var JSONImport = /** @class */ (function (_super) {
    __extends(JSONImport, _super);
    function JSONImport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONImport.prototype.openFile = function () {
        console.log("Open json file " + this.filename);
    };
    JSONImport.prototype.readFile = function () {
        console.log("Read json file " + this.filename);
    };
    JSONImport.prototype.parseData = function () {
        console.log('Parse json data');
        return [
            'First',
            'Second'
        ];
    };
    return JSONImport;
}(Import_1["default"]));
exports["default"] = JSONImport;
