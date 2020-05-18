"use strict";
exports.__esModule = true;
var CacheProvider = /** @class */ (function () {
    function CacheProvider() {
    }
    CacheProvider.getInstance = function () {
        if (!CacheProvider.instance)
            CacheProvider.instance = new CacheProvider();
        return CacheProvider.instance;
    };
    CacheProvider.prototype.getItem = function (key) {
        return CacheProvider.items[key];
    };
    CacheProvider.prototype.setItem = function (key, val) {
        console.log("Set " + key + ":" + val);
        CacheProvider.items[key] = val;
    };
    CacheProvider.items = {};
    return CacheProvider;
}());
exports["default"] = CacheProvider;
