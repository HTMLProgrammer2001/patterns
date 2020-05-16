import Subscriber from './Subscriber';
import Newspaper from './Newspaper';

let anna = new Subscriber('Anya'),
	yura = new Subscriber('Yura');

let newYorkTimes = new Newspaper('New York Times'),
	truth = new Newspaper('Truth');

anna.subscribe(newYorkTimes);
anna.subscribe(truth);

yura.subscribe(newYorkTimes);

newYorkTimes.notifyObservers();
truth.notifyObservers();

anna.unsubscribe(newYorkTimes);

newYorkTimes.notifyObservers();
truth.notifyObservers();