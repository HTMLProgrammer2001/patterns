"use strict";
exports.__esModule = true;
var JSONImport_1 = require("./Importers/JSONImport");
var XMLImport_1 = require("./Importers/XMLImport");
var json = new JSONImport_1["default"]('data.json'), xml = new XMLImport_1["default"]('data.xml');
json["import"]();
xml["import"]();
