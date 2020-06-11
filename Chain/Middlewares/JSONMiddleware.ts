import IMiddleware from './IMiddleware';
import TRequest from '../Request';


class JSONMiddleware implements IMiddleware{
	next: IMiddleware = null;

	handle(request: TRequest){
		if(typeof request.getBody() != 'string')
			request.setBody(JSON.stringify(request.getBody()));

		if(this.next)
			this.next.handle(request);
	}
}

export default JSONMiddleware;
