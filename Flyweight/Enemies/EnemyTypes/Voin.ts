import IEnemyType from './IEnemyType';
import EnemyContext from '../EnemyContext';
import Player from '../../Player';


class Voin extends IEnemyType{
	name: string = 'Voin';

	getMaxHealth(): number{
		return 25;
	}

	getMaxDistance(): number{
		return 2;
	}

	getPower(): number{
		return 10;
	}

	getName(): string{
		return this.name;
	}
}

export default Voin;
