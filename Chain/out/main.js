"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMiddleware_1 = require("./Middlewares/AuthMiddleware");
const JSONMiddleware_1 = require("./Middlewares/JSONMiddleware");
const Server_1 = require("./Server");
const Request_1 = require("./Request");
let server = new Server_1.default();
server.addPage('/', (request) => console.log(request.getBody()));
let req = new Request_1.default('/error', 'test');
server.send(req);
req = new Request_1.default('/', 'test');
server.send(req);
server.addMiddleware(new JSONMiddleware_1.default());
req.setBody({
    body: 'test'
});
server.send(req);
server.addMiddleware(new AuthMiddleware_1.default());
req.addHeader('Auth', '');
server.send(req);
req.addHeader('Auth', 'token');
server.send(req);
