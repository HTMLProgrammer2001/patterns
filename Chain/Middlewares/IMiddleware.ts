import TRequest from '../Request';

interface IMiddleware{
	next: IMiddleware;

	handle(request: TRequest);
}

export default IMiddleware;
