import ICard from './Card/ICard';
import CardWithPassword from './Card/CardWithPassword';

import IState from './States/IState';
import CardState from './States/CardState';


class BankMachine{
	private state: IState = new CardState(this);
	private card: ICard;

	insertCard(card: ICard){
		this.state.insertCard(card);
	}

	typePassword(password: string){
		this.state.typePassword(password);
	}

	raise(cost: number){
		this.state.raise(cost);
	}

	setState(state: IState){
		this.state = state;
	}

	returnCard(): ICard{
		return this.state.returnCard();
	}

	setCard(card: ICard){
		this.card = card;
	}

	getCard(): ICard{
		return this.card;
	}
}

export default BankMachine;
