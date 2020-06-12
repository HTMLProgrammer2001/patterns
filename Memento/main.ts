import HeroMemento from './HeroMemento';
import Hero from './Hero';


let hero = new Hero,
	history: Array<HeroMemento> = [];

history.push(hero.save());

hero.shoot();
hero.shoot();

hero.die();

history.push(hero.save());

hero.shoot();
hero.die();

hero.restore(history.pop());
hero.restore(history.pop());
