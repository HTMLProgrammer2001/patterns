import Transport from './Transport';

class Train extends Transport{
	getName(){
		return 'Train';
	}

	getSpeed(){
		return 100;
	}
}

export default Train;
