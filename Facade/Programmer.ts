import IDEFacade from './IDEFacade';

class Programmer{
	constructor(public ide: IDEFacade){};

	createApplication(){
		this.ide.start();
		this.ide.stop();
	}
}

export default Programmer;
