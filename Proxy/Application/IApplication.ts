import User from '../User';

interface IApplication{
	view();
	edit();
	changeSettings();
	getUser(): User;
}

export default IApplication;
