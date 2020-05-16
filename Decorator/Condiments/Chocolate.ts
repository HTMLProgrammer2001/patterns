import Condiment from './Condiment';

class Chocolate extends Condiment{
	getDescription(){
		return this.drink.getDescription() + ', chocolate';
	}

	cost(){
		return this.drink.cost() + 0.7;
	}
}

export default Chocolate;
