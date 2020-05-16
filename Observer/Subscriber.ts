import Observer from './Observer';
import Newspaper from './Newspaper';

import Observable from './Observable';

class Subscriber implements Observable{
	constructor(public name: string){}

	update(newspaper: Newspaper){
		console.log(`${this.name} receive ${newspaper.name} newspaper`);
	}

	subscribe(newspaper: Newspaper){
		newspaper.addObserver(this);

		console.log(`${this.name} subscribe on the ${newspaper.name}`);
	}

	unsubscribe(newspaper: Newspaper){
		newspaper.removeObserver(this);

		console.log(`${this.name} unsubscribe from ${newspaper.name}`);	
	}
}

export default Subscriber;