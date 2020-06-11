import TRequest from './Request';

import IMiddleware from './Middlewares/IMiddleware';
import DefaultMiddleware from './Middlewares/DefaultMiddleware';


export type Page = {
	url: string;
	handler: (request: TRequest) => void
}

class Server{
	mainMiddleware: IMiddleware = new DefaultMiddleware();
	pages: Array<Page> = [];

	addPage(url: string, handler: (request: TRequest) => void){
		this.pages.push({
			url,
			handler
		});
	}

	addMiddleware(middleware: IMiddleware){
		middleware.next = this.mainMiddleware;

		this.mainMiddleware = middleware;
	}

	send(request: TRequest){
		if(this.mainMiddleware.handle(request))
			return;

		let page = this.pages.find((p) => p.url == request.getUrl());

		if(page)
			page.handler(request);
		else
			console.error(`404! Handler for ${request.getUrl()} not found`);
	}
}

export default Server;
