import Command from './Command';

class NoneCommand implements Command{
	execute(){}
	
	undo(){}
}

export default NoneCommand;
