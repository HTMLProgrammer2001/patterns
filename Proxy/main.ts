import {Roles, default as User} from './User';
import Application from './Application/Application';
import ApplicationProxy from './Application/ApplicationProxy';
import IApplication from './Application/IApplication';

let user: User = new User('Yura'),
	app: IApplication = new Application(user);

app = new ApplicationProxy(app);

app.view();

user.setRole(Roles.USER);
app.view();
app.edit();

user.setRole(Roles.MODERATOR);
app.edit();
app.changeSettings();

user.setRole(Roles.ADMIN);
app.changeSettings();
