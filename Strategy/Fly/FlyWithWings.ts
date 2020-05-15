import FlyBehavior from './FlyBehavior';

class FlyWithWings implements FlyBehavior{
	fly(name){
		console.log(`${name} fly with wings`);
	}
}

export default FlyWithWings;