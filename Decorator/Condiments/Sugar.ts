import Condiment from './Condiment';

class Sugar extends Condiment{
	getDescription(){
		return this.drink.getDescription() + ', sugar';
	}

	cost(){
		return this.drink.cost() + 0.1;
	}
}

export default Sugar;
