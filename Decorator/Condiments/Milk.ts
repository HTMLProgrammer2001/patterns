import Condiment from './Condiment';

class Milk extends Condiment{
	getDescription(){
		return this.drink.getDescription() + ', milk';
	}

	cost(){
		return this.drink.cost() + 0.5;
	}
}

export default Milk;
