import ICard from './ICard';

class CardWithPassword implements ICard{
	constructor(private card: ICard, private password: string){}

	checkPassword(password: string): boolean{
		return this.card.checkPassword(password);
	}

	getOwner(): string{
		return this.card.getOwner();
	}

	getCost(): number{
		return this.card.getCost(this.password);
	}

	raiseCost(cost: number): boolean{
		return this.card.raiseCost(cost, this.password);
	}
}

export default CardWithPassword;
