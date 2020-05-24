"use strict";
exports.__esModule = true;
var Programmer_1 = require("./Programmer");
var Editor_1 = require("./System/Editor");
var Compiler_1 = require("./System/Compiler");
var Runner_1 = require("./System/Runner");
var IDEFacade_1 = require("./IDEFacade");
var editor = new Editor_1["default"](), compiler = new Compiler_1["default"](), runner = new Runner_1["default"](), ide = new IDEFacade_1["default"](editor, compiler, runner), programmer = new Programmer_1["default"](ide);
programmer.createApplication();
