import Delivery from './Delivery';
import Car from '../Transport/Car';

class CarDelivery extends Delivery{
	createTransport(){
		return new Car();
	}
}

export default CarDelivery;
