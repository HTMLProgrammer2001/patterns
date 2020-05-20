import Command from './Command';
import CutCommand from './CutCommand';
import PasteCommand from './PasteCommand';
import Editor from '../Editor';


class ReplaceCommand implements Command{
	backup: string;
	copyComm: Command = new CutCommand(this.editor);
	pasteComm: Command = new PasteCommand(this.editor);

	constructor(private editor: Editor){}

	execute(){
		console.log(`Replace text from ${this.editor.offset} by ${this.editor.len} characters`);

		this.backup = this.editor.getText();
		this.copyComm.execute();
		this.pasteComm.execute();

		console.log(this.editor.getText());
	}

	undo(){
		console.log(`Undo replace`);

		this.editor.setText(this.backup);
	}
}

export default ReplaceCommand;
