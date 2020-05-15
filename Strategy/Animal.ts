import FlyBehavior from './Fly/FlyBehavior';

class Animal{
	public flyBehave;

	constructor(public name:string){};

	setFly(flyBehave: FlyBehavior){
		this.flyBehave= flyBehave;
	}

	fly(){
		this.flyBehave.fly(this.getName());
	}

	getName(){
		return this.name;
	}
}

export default Animal;