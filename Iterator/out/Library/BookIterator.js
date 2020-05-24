"use strict";
exports.__esModule = true;
var BookIterator = /** @class */ (function () {
    function BookIterator(books) {
        this.books = books;
        this.current = 0;
    }
    ;
    BookIterator.prototype.next = function () {
        return this.books[this.current++];
    };
    BookIterator.prototype.hasNext = function () {
        return this.current < this.books.length;
    };
    return BookIterator;
}());
exports["default"] = BookIterator;
