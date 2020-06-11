"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMiddleware {
    constructor() {
        this.next = null;
    }
    handle(request) {
        var _a;
        if (((_a = request.getHeader('Auth')) === null || _a === void 0 ? void 0 : _a.value) == 'token') {
            console.log('You are authorized');
            if (this.next) {
                this.next.handle(request);
            }
        }
        else {
            console.error('You are not authorized');
        }
    }
}
exports.default = AuthMiddleware;
