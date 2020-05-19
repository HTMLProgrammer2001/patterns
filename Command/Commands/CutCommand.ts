import Command from './Command';
import Editor from '../Editor';

class CutCommand implements Command{
	backup: string;

	constructor(private editor: Editor){}

	execute(){
		console.log(`Cut text from ${this.editor.offset} by ${this.editor.len} characters`);

		this.backup = this.editor.getText();
		this.editor.cut();

		console.log(this.editor.getText());
	}

	undo(){
		console.log(`Undo cut text from ${this.editor.offset} by ${this.editor.len} characters`);

		this.editor.text = this.backup;

		console.log(this.editor.getText());
	}
}

export default CutCommand;
