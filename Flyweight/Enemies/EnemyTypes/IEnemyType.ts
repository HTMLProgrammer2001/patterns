import EnemyContext from '../EnemyContext';
import Player from '../../Player';


abstract class IEnemyType{
	draw(ctx: EnemyContext){
		console.log(`${this.getName()} with health(${ctx.getHealth()}) at ${JSON.stringify(ctx.getPosition())}`);
	}

	shoot(pl: Player, ctx: EnemyContext){
		if(ctx.getDistance() < this.getMaxDistance())
			pl.damage(this.getPower());
	}

	abstract getMaxHealth(): number;
	abstract getPower(): number;
	abstract getMaxDistance(): number;
	abstract getName(): string;
}

export default IEnemyType;
