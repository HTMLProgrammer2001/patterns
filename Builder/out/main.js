"use strict";
exports.__esModule = true;
var Baker_1 = require("./Baker");
var RyeBreadBuilder_1 = require("./BreadBuilders/RyeBreadBuilder");
var WhiteBreadBuilder_1 = require("./BreadBuilders/WhiteBreadBuilder");
var baker = new Baker_1["default"](), builder = new RyeBreadBuilder_1["default"](), bread = baker.bake(builder);
bread.printComponents();
builder = new WhiteBreadBuilder_1["default"]();
bread = baker.bake(builder);
bread.printComponents();
