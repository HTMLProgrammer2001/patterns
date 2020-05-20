import Command from './Commands/Command';

class CommandHistory{
	private static instance: CommandHistory;
	private commands: Array<Command> = [];

	private constructor(){}

	public static getInstance(){
		if(!CommandHistory.instance)
			CommandHistory.instance = new CommandHistory();

		return CommandHistory.instance;
	}

	addCommand(comm: Command){
		this.commands.push(comm);
	}

	undoCommand(){
		if(this.commands.length)
			this.commands.pop().undo();
	}
}

export default CommandHistory;
