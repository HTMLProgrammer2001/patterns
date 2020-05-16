import Observable from './Observable';

interface Observer{
	addObservers(observers: Array<Observable>);

	addObserver(observer: Observable);

	removeObserver(observer: Observable);

	notifyObservers();
}

export default Observer;