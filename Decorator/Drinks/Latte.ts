import Drink from '../drink';

class Latte implements Drink{
	getDescription(){
		return "Latte";
	}

	cost(){
		return 3.50;
	}
}

export default Latte;
