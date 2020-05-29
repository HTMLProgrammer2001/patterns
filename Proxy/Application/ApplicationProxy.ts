import IApplication from './IApplication';
import User from '../User';
import Application from './Application';
import {Roles} from '../User';

class ApplicationProxy implements IApplication{
	constructor(private app: IApplication){};

	view(){
		let user = this.app.getUser();

		if(user && user.getRole() <= Roles.USER)
			this.app.view();
		else
			console.log(`Access to view page is denied`);
	}

	edit(){
		let user = this.app.getUser();

		if(user && user.getRole() <= Roles.MODERATOR)
			this.app.edit();
		else
			console.log(`Access to edit page is denied`);	
	}

	changeSettings(){
		let user = this.app.getUser();

		if(user && user.getRole() <= Roles.ADMIN)
			this.app.changeSettings();
		else
			console.log(`Access to change settings is denied`);
	}

	getUser(): User{
		return this.app.getUser();
	}
}

export default ApplicationProxy;
