import Transport from './Transport';

class Car extends Transport{
	getName(){
		return 'Car';
	}

	getSpeed(){
		return 60;
	}
}

export default Car;
