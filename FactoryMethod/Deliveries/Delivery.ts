import Transport from '../Transport/Transport';


abstract class Delivery{
	distance = 0;

	setDistance(d: number){
		this.distance = d;
	}

	getDistance(): number{
		return this.distance;
	}

	deliver(){
		let transport: Transport = this.createTransport();
		transport.deliver(this.distance);
	}

	abstract createTransport();
}

export default Delivery;
