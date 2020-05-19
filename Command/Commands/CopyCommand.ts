import Command from './Command';
import Editor from '../Editor';


class CopyCommand implements Command{
	backup: string;

	constructor(private editor: Editor){}

	execute(){
		console.log(`Copy text from ${this.editor.offset} by ${this.editor.len} characters`);

		console.log(this.editor.copy());
	}

	undo(){}
}

export default CopyCommand;
