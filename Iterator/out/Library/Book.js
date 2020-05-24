"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    function Book(name, authors) {
        this.name = name;
        this.authors = authors;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.getAuthors = function () {
        return this.authors;
    };
    return Book;
}());
exports["default"] = Book;
