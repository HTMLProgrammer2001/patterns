import DialogMediator from './DialogMediator';
import ButtonWidget from './Widgets/ButtonWidget';
import EditWidget from './Widgets/EditWidget';

let dialog = new DialogMediator(),
	edit = new EditWidget(dialog),
	send = new ButtonWidget(dialog),
	clear = new ButtonWidget(dialog);

dialog.sendButton = send;
dialog.clearButton = clear;
dialog.edit = edit;

edit.changeValue('test');
send.send();
clear.send();
