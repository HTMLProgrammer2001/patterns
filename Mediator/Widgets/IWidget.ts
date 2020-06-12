import DialogMediator from '../DialogMediator';


abstract class IWidget{
	constructor(private mediator: DialogMediator){}

	send(){
		this.mediator.send(this);
	}

	abstract notify(msg: string);
}

export default IWidget;
