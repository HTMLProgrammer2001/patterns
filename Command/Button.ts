import Command from './Commands/Command';
import NoneCommand from './Commands/NoneCommand';

class Button{
	private comm: Command = new NoneCommand();

	constructor(public name:string){};

	setCommand(newComm: Command){
		console.log(`${this.name} was setted new command`);

		this.comm = newComm;
	}

	wasPressed(){
		console.log(`${this.name} was pressed`);

		this.comm.execute();
		this.comm = new NoneCommand();
	}
}

export default Button;
