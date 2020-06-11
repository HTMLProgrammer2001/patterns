import IMiddleware from './IMiddleware';
import TRequest from '../Request';


class AuthMiddleware implements IMiddleware{
	next: IMiddleware = null;

	handle(request: TRequest){
		if(request.getHeader('Auth')?.value == 'token'){
			console.log('You are authorized');

			if(this.next){
				this.next.handle(request);
			}
		}
		else{
			console.error('You are not authorized');
		}
	}
}

export default AuthMiddleware;
