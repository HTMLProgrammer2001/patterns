import IApplication from './IApplication';
import User from '../User';

class Application implements IApplication{
	constructor(private user: User){};

	view(){
		console.log(`${this.user.getName()} view content`);
	}

	edit(){
		console.log(`${this.user.getName()} edit content`);	
	}

	changeSettings(){
		console.log(`${this.user.getName()} change settings`);
	}

	getUser(): User{
		return this.user;
	}
}

export default Application;
