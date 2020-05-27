import IState from './IState';
import PasswordState from './PasswordState';

import ICard from '../Card/ICard';
import BankMachine from '../BankMachine';

class CardState implements IState{
	constructor(private machine: BankMachine){}

	insertCard(card: ICard){
		this.machine.setCard(card);
		this.machine.setState(new PasswordState(this.machine));
	}

	typePassword(password: string){
		console.log('Insert card at first');
	}

	raise(cost: number){
		console.log('No card');	
	}

	returnCard(): ICard{
		console.log('No card to return');
		return;
	}
}

export default CardState;
