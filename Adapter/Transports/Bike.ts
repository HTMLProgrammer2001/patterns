import Transport from './Transport';

class Bike implements Transport{
	drive(): void{
		console.log('Bike is move');
	}
}

export default Bike;
