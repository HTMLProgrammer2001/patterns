"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultMiddleware {
    constructor() {
        this.next = null;
    }
    handle(request) {
        return false;
    }
}
exports.default = DefaultMiddleware;
