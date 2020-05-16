import Drink from '../drink';

class Americano implements Drink{
	getDescription(){
		return "Americano";
	}

	cost(){
		return 1.99;
	}
}

export default Americano;
