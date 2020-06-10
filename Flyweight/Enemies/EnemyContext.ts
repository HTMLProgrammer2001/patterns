import IEnemyType from './EnemyTypes/IEnemyType';
import Player from '../Player';


export type Position = {
	x: number,
	y: number
}

class EnemyContext{
	private health: number;

	constructor(private x: number, private y: number, public type: IEnemyType){
		this.health = type.getMaxHealth();
	}

	getPosition(): Position{
		return {
			x: this.x,
			y: this.y
		};
	}

	getHealth(): number{
		return this.health;
	}

	getDistance(){
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	move(pl: Player){
		let oldPos: Position = this.getPosition(),
			angle = Math.atan2(oldPos.y, oldPos.x) - Math.PI;

		this.x = Math.cos(angle) * 2 + oldPos.x;
		this.y = Math.sin(angle) * 2 + oldPos.y;
	}

	draw(){
		this.type.draw(this);
	}

	damage(pl: Player): number{
		this.health -= pl.getPower();

		return this.health;
	}

	shoot(pl: Player){
		this.type.shoot(pl, this);
	}

	isAlive(): boolean{
		return this.health > 0;
	}
}

export default EnemyContext;
