import Transport from './Transports/Transport';
import Animal from './Animals/Animal';

class AnimalTransport implements Transport{
	constructor(private animal: Animal){};

	drive(){
		this.animal.run();
	}
}

export default AnimalTransport;
