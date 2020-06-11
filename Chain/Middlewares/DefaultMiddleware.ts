import IMiddleware from './IMiddleware';
import TRequest from '../Request';


class DefaultMiddleware implements IMiddleware{
	next: IMiddleware = null;

	handle(request: TRequest){
		return false;
	}
}

export default DefaultMiddleware;
