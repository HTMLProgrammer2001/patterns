import IState from './IState';
import RaiseState from './RaiseState';
import ICard from '../Card/ICard';
import CardWithPassword from '../Card/CardWithPassword';
import BankMachine from '../BankMachine';

class PasswordState implements IState{
	constructor(private machine: BankMachine){}

	insertCard(card: ICard){
		console.log('Return old card at start');
	}

	typePassword(password: string){
		let card = this.machine.getCard();

		if(card && card.checkPassword(password)){
			this.machine.setCard(new CardWithPassword(card, password));
			this.machine.setState(new RaiseState(this.machine));
		}
		else
			console.log('Wrong password');
	}

	raise(cost: number){
		console.log('No password was entered');	
	}

	returnCard(): ICard{
		let card = this.machine.getCard();
		this.machine.setCard(null);

		console.log('Returned card');
		return card;
	}
}

export default PasswordState;
