"use strict";
exports.__esModule = true;
var Voin_1 = require("./EnemyTypes/Voin");
var Elf_1 = require("./EnemyTypes/Elf");
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory() {
        this.types = [];
    }
    EnemyFactory.prototype.getType = function (name) {
        var type = this.findType(name);
        return type !== null && type !== void 0 ? type : this.createType(name);
    };
    EnemyFactory.prototype.findType = function (name) {
        for (var i = 0; i < this.types.length; i++)
            if (name == this.types[i].getName())
                return this.types[i];
        return null;
    };
    EnemyFactory.prototype.createType = function (name) {
        var type = null;
        switch (name) {
            case 'Voin':
                type = new Voin_1["default"]();
                break;
            case 'Elf':
                type = new Elf_1["default"]();
        }
        return type;
    };
    return EnemyFactory;
}());
exports["default"] = EnemyFactory;
