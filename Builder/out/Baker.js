"use strict";
exports.__esModule = true;
var Baker = /** @class */ (function () {
    function Baker() {
    }
    Baker.prototype.bake = function (breadBuilder) {
        breadBuilder.createBread();
        breadBuilder.setFlour();
        breadBuilder.setSalt();
        breadBuilder.setAdditives();
        return breadBuilder.bread;
    };
    return Baker;
}());
exports["default"] = Baker;
