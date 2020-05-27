import IState from './IState';
import ICard from '../Card/ICard';
import BankMachine from '../BankMachine';

class RaiseState implements IState{
	constructor(private machine: BankMachine){}

	insertCard(card: ICard){
		console.log('Return old card at start');
	}

	typePassword(password: string){
		console.log('Password already was typed');
	}

	raise(cost: number){
		let card = this.machine.getCard();

		if(card.raiseCost(cost))
			console.log(`Was raised \$${cost} from card of ${card.getOwner()}`);
		else
			console.log(`Not enough money`);
	}

	returnCard(): ICard{
		let card = this.machine.getCard();
		this.machine.setCard(null);

		console.log('Returned card');
		return card;
	}
}

export default RaiseState;
