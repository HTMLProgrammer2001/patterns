import EnemyContext from './Enemies/EnemyContext';


class Player{
	private power: number;
	private health: number;

	constructor(){
		this.power = 10;
		this.health = 100;
	}

	getPower(): number{
		return this.power;
	}

	getHealth(): number{
		return this.health;
	}

	damage(d: number): number{
		this.health -= d;

		return this.health;
	}

	shoot(enemy: EnemyContext){
		enemy.damage(this);
	}

	isAlive(): boolean{
		return this.health > 0;
	}
}

export default Player;
