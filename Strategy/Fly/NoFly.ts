import FlyBehavior from './FlyBehavior';

class NoFly implements FlyBehavior{
	fly(name){
		console.log(`${name} can't fly`);
	}
}

export default NoFly;