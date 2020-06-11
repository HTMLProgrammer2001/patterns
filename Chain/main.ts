import IMiddleware from './Middlewares/IMiddleware';
import AuthMiddleware from './Middlewares/AuthMiddleware';
import JSONMiddleware from './Middlewares/JSONMiddleware';

import Server from './Server';
import TRequest from './Request';


let server = new Server();

server.addPage('/', (request: TRequest) => console.log(request.getBody()));

let req = new TRequest('/error', 'test');
server.send(req);

req = new TRequest('/', 'test');
server.send(req);

server.addMiddleware(new JSONMiddleware());

req.setBody({
	body: 'test'
})
server.send(req);

server.addMiddleware(new AuthMiddleware());

req.addHeader('Auth', '');
server.send(req);

req.addHeader('Auth', 'token');
server.send(req);
