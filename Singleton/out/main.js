"use strict";
exports.__esModule = true;
var CacheProvider_1 = require("./CacheProvider");
var cache, cache2;
cache = CacheProvider_1["default"].getInstance();
cache.setItem('elem1', 'hi');
cache.setItem('elem2', 'bye');
console.log(cache.getItem('elem1'));
cache2 = CacheProvider_1["default"].getInstance();
console.log(cache2.getItem('elem1'));
console.log(cache2.getItem('elem2'));
