import ICard from './ICard';

class Card implements ICard{
	constructor(public owner: string, private cost: number, private password: string){}

	checkPassword(password: string): boolean{
		return this.password == password;
	}

	getOwner(): string{
		return this.owner;
	}

	getCost(password: string): number{
		return this.checkPassword(password) ? this.cost : null;
	}

	raiseCost(cost: number, password: string){
		if(this.checkPassword(password) && this.cost > cost){
			this.cost -= cost;
			return true;
		}
	}
}

export default Card;
