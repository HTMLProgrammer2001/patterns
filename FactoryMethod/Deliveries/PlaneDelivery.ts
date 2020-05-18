import Delivery from './Delivery';
import Plane from '../Transport/Plane';

class PlaneDelivery extends Delivery{
	createTransport(){
		return new Plane();
	}
}

export default PlaneDelivery;
