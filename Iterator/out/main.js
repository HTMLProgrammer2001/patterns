"use strict";
exports.__esModule = true;
var Library_1 = require("./Library/Library");
var lib = new Library_1["default"](), books = lib.getBooks();
while (books.hasNext())
    console.log(books.next().getName());
