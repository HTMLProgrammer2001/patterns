"use strict";
exports.__esModule = true;
var BookIterator_1 = require("./BookIterator");
var Book_1 = require("./Book");
var Library = /** @class */ (function () {
    function Library() {
        this.books = [
            new Book_1["default"]('Гарри Поттер', 'Джоанн Роулинг'),
            new Book_1["default"]('Песни льда и пламени', 'Джордж Мартин'),
            new Book_1["default"]('Шерлок Холмс', 'Артур Конан Дойль')
        ];
    }
    Library.prototype.getBooks = function () {
        return new BookIterator_1["default"](this.books);
    };
    return Library;
}());
exports["default"] = Library;
