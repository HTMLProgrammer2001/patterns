"use strict";
exports.__esModule = true;
var IDEFacade = /** @class */ (function () {
    function IDEFacade(editor, compiler, runner) {
        this.editor = editor;
        this.compiler = compiler;
        this.runner = runner;
    }
    IDEFacade.prototype.start = function () {
        this.editor.createCode();
        this.editor.saveCode();
        this.compiler.compile();
        this.runner.run();
    };
    IDEFacade.prototype.stop = function () {
        this.runner.finish();
    };
    return IDEFacade;
}());
exports["default"] = IDEFacade;
