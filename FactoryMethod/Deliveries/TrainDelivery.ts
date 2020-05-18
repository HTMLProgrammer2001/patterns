import Delivery from './Delivery';
import Train from '../Transport/Train';

class TrainDelivery extends Delivery{
	createTransport(){
		return new Train();
	}
}

export default TrainDelivery;
