import Drink from '../drink';

class Coffee implements Drink{
	getDescription(){
		return "Black coffee";
	}

	cost(){
		return 2.99;
	}
}

export default Coffee;
