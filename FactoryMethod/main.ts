import TrainDelivery from './Deliveries/TrainDelivery';
import PlaneDelivery from './Deliveries/PlaneDelivery';
import CarDelivery from './Deliveries/CarDelivery';
import Delivery from './Deliveries/Delivery';

let deliveryOrder: Delivery = new CarDelivery();
deliveryOrder.setDistance(3000);
deliveryOrder.deliver();

deliveryOrder = new PlaneDelivery();
deliveryOrder.setDistance(3000);
deliveryOrder.deliver();

deliveryOrder = new TrainDelivery();
deliveryOrder.setDistance(3000);
deliveryOrder.deliver();
