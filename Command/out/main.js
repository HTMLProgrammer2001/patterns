"use strict";
exports.__esModule = true;
var Editor_1 = require("./Editor");
var Button_1 = require("./Button");
var Clipboard_1 = require("./Clipboard");
var CutCommand_1 = require("./Commands/CutCommand");
var CopyCommand_1 = require("./Commands/CopyCommand");
var PasteCommand_1 = require("./Commands/PasteCommand");
var ReplaceCommand_1 = require("./Commands/ReplaceCommand");
var UndoCommand_1 = require("./Commands/UndoCommand");
var HistoriableCommand_1 = require("./Commands/HistoriableCommand");
var editor = new Editor_1["default"]('Hi, i love patterns'), clipboard = Clipboard_1["default"].getInstance(), copyButton = new Button_1["default"]('Copy'), cutButton = new Button_1["default"]('Cut'), pasteButton = new Button_1["default"]('Paste'), replaceButton = new Button_1["default"]('Replace'), undoButton = new Button_1["default"]('Undo'), copyCommand = new CopyCommand_1["default"](editor), cutCommand = new CutCommand_1["default"](editor), pasteCommand = new PasteCommand_1["default"](editor), undoCommand = new UndoCommand_1["default"](), replaceCommand = new ReplaceCommand_1["default"](editor);
copyButton.setCommand(copyCommand);
cutButton.setCommand(new HistoriableCommand_1["default"](cutCommand));
pasteButton.setCommand(new HistoriableCommand_1["default"](pasteCommand));
replaceButton.setCommand(new HistoriableCommand_1["default"](replaceCommand));
undoButton.setCommand(undoCommand);
editor.setRange(3, 8);
copyButton.wasPressed();
pasteButton.wasPressed();
cutButton.wasPressed();
editor.setRange(0, 3);
copyButton.wasPressed();
editor.setRange(3, 8);
replaceButton.wasPressed();
undoButton.wasPressed();
undoButton.wasPressed();
