import Command from './Command';
import CommandHistory from '../CommandHistory';


class HistoriableCommand implements Command{
	history: CommandHistory = CommandHistory.getInstance();

	constructor(private comm: Command){};

	execute(){
		this.comm.execute();
		this.history.addCommand(this.comm);
	}

	undo(){
		this.comm.undo();
	}
}

export default HistoriableCommand;
