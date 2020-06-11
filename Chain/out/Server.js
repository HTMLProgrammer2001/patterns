"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultMiddleware_1 = require("./Middlewares/DefaultMiddleware");
class Server {
    constructor() {
        this.mainMiddleware = new DefaultMiddleware_1.default();
        this.pages = [];
    }
    addPage(url, handler) {
        this.pages.push({
            url,
            handler
        });
    }
    addMiddleware(middleware) {
        middleware.next = this.mainMiddleware;
        this.mainMiddleware = middleware;
    }
    send(request) {
        if (this.mainMiddleware.handle(request))
            return;
        let page = this.pages.find((p) => p.url == request.getUrl());
        if (page)
            page.handler(request);
        else
            console.error(`404! Handler for ${request.getUrl()} not found`);
    }
}
exports.default = Server;
