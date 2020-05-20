import Command from './Command';
import CommandHistory from '../CommandHistory';

class UndoCommand implements Command{
	backup: string;
	history: CommandHistory = CommandHistory.getInstance();

	execute(){
		this.history.undoCommand();
	}

	undo(){}
}

export default UndoCommand;
