import Drink from '../drink';


abstract class Condiment implements Drink{
	constructor(public drink:Drink){}

	abstract getDescription(): string;
	abstract cost(): number;
}

export default Condiment;