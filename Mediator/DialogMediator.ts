import IWidget from './Widgets/IWidget';
import EditWidget from './Widgets/EditWidget';
import ButtonWidget from './Widgets/ButtonWidget';


class DialogMediator{
	sendButton: ButtonWidget;
	clearButton: ButtonWidget;
	edit: EditWidget;

	send(sender: IWidget){
		if(sender == this.edit)
			console.log(`Changed edit to ${this.edit.getValue()}`);

		if(sender == this.sendButton)
			this.edit.notify('sended');

		if(sender == this.clearButton)
			this.edit.notify('clear');
	}
}

export default DialogMediator;
