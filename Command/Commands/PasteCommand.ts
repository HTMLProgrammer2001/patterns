import Command from './Command';
import Editor from '../Editor';

class PasteCommand implements Command{
	backup: string;

	constructor(private editor: Editor){}

	execute(){
		console.log(`Paste to text from ${this.editor.offset}`);

		this.backup = this.editor.getText();
		this.editor.paste();

		console.log(this.editor.getText());
	}

	undo(){
		console.log(`Undo paste to text from ${this.editor.offset}`);

		this.editor.setText(this.backup);

		console.log(this.editor.getText());		
	}
}

export default PasteCommand;
