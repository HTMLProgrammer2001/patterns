import Observer from './Observer';
import Observable from './Observable';


class Newspaper implements Observer{
	public subscribers: Array<Observable> = [];

	constructor(public name:string){}

	addObservers(observers: Array<Observable>){
		this.subscribers = this.subscribers.concat(observers);
	}

	addObserver(observer: Observable){
		this.subscribers.push(observer);
	}

	removeObserver(observer: Observable){
		for(let i = 0; i < this.subscribers.length; i++)
			if(this.subscribers[i] == observer)
				this.subscribers.splice(i, 1);
	}

	notifyObservers(){
		for(let subscriber of this.subscribers){
			subscriber.update(this);
		}
	}
}

export default Newspaper;