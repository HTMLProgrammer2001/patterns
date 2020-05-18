import Transport from './Transport';

class Plane extends Transport{
	getName(){
		return 'Plane';
	}

	getSpeed(){
		return 1000;
	}
}

export default Plane;
