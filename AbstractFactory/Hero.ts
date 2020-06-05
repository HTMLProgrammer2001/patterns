import IHeroFactory from './HeroFatories/IHeroFactory';
import IWeapon from './Weapons/IWeapon';
import IMovement from './Movements/IMovement';

class Hero{
	private weapon: IWeapon; 
	private movement: IMovement;

	constructor(factory: IHeroFactory){
		this.weapon = factory.createWeapon();
		this.movement = factory.createMovement();
	}

	move(){
		this.movement.move();
	}

	hit(){
		this.weapon.hit();
	}
}

export default Hero;
