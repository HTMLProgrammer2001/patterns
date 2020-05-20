import Auto from './Transports/Auto';
import Bike from './Transports/Bike';

import Camel from './Animals/Camel';
import Horse from './Animals/Horse';

import AnimalTransport from './AnimalTransport';
import Traveler from './Traveler';

let traveler = new Traveler(),
	auto = new Auto(),
	bike = new Bike(),
	camel = new Camel(),
	horse = new Horse();

traveler.travel(auto);
traveler.travel(bike);

traveler.travel(new AnimalTransport(camel));
traveler.travel(new AnimalTransport(horse));
