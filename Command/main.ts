import Editor from './Editor';
import Button from './Button';
import ClipboardApi from './Clipboard';

import CutCommand from './Commands/CutCommand';
import CopyCommand from './Commands/CopyCommand';
import PasteCommand from './Commands/PasteCommand';
import ReplaceCommand from './Commands/ReplaceCommand';
import UndoCommand from './Commands/UndoCommand';

import Command from './Commands/Command';
import HistoriableCommand from './Commands/HistoriableCommand';


let editor: Editor = new Editor('Hi, i love patterns'),
	clipboard: ClipboardApi = ClipboardApi.getInstance(),

	copyButton: Button = new Button('Copy'),
	cutButton: Button = new Button('Cut'),
	pasteButton: Button = new Button('Paste'),
	replaceButton: Button = new Button('Replace'),
	undoButton: Button = new Button('Undo'),

	copyCommand: Command = new CopyCommand(editor),
	cutCommand: Command = new CutCommand(editor),
	pasteCommand: Command = new PasteCommand(editor),
	undoCommand: Command = new UndoCommand(),
	replaceCommand: Command = new ReplaceCommand(editor);

copyButton.setCommand(copyCommand);
cutButton.setCommand(new HistoriableCommand(cutCommand));
pasteButton.setCommand(new HistoriableCommand(pasteCommand));
replaceButton.setCommand(new HistoriableCommand(replaceCommand));
undoButton.setCommand(undoCommand);

editor.setRange(3, 8);

copyButton.wasPressed();
pasteButton.wasPressed();
cutButton.wasPressed();

editor.setRange(0, 3);
copyButton.wasPressed();

editor.setRange(3, 8);
replaceButton.wasPressed();

undoButton.wasPressed();
undoButton.wasPressed();
