import Observer from './Observer';

interface Observable{
	update(o: Observer): void;
}

export default Observable;