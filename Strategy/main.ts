import Animal from './Animal';
import FlyWithWings from './Fly/FlyWithWings';
import NoFly from './Fly/NoFly';

class Duck extends Animal{
	constructor(name: string){
		super(name);

		this.flyBehave = new FlyWithWings();
	}
}

let duck = new Duck('Ira');

duck.fly();

duck.setFly(new NoFly());

duck.fly();