import Editor from './Editor';
import Button from './Button';

import CutCommand from './Commands/CutCommand';
import CopyCommand from './Commands/CopyCommand';
import PasteCommand from './Commands/PasteCommand';
import Command from './Commands/Command';
import ClipboardApi from './Clipboard';


let editor: Editor = new Editor('Hi, i love patterns'),
	clipboard: ClipboardApi = ClipboardApi.getInstance(),
	copyButton: Button = new Button('Copy'),
	cutButton: Button = new Button('Cut'),
	pasteButton: Button = new Button('Paste'),
	copyCommand: Command = new CopyCommand(editor),
	cutCommand: Command = new CutCommand(editor),
	pasteCommand: Command = new PasteCommand(editor);

copyButton.setCommand(copyCommand);
cutButton.setCommand(cutCommand);
pasteButton.setCommand(pasteCommand);

editor.setRange(3, 8);

copyButton.wasPressed();
pasteButton.wasPressed();
cutButton.wasPressed();
