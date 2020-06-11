"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSONMiddleware {
    constructor() {
        this.next = null;
    }
    handle(request) {
        if (typeof request.getBody() != 'string')
            request.setBody(JSON.stringify(request.getBody()));
        if (this.next)
            this.next.handle(request);
    }
}
exports.default = JSONMiddleware;
