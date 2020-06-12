import IWidget from './IWidget';


class EditWidget extends IWidget{
	private value: string = '';

	changeValue(newVal: string){
		this.value = newVal;

		this.send();
	}

	getValue(): string{
		return this.value;
	}

	notify(msg: string){
		if(msg == 'sended'){
			console.log('Dialog sended');
		}
		else if(msg == 'clear'){
			this.changeValue('');

			console.log('Edit was cleared');
		}
	}
}

export default EditWidget;
