import IEnemyType from './IEnemyType';
import EnemyContext from '../EnemyContext';
import Player from '../../Player';


class Elf extends IEnemyType{
	name: string = 'Elf';

	getMaxHealth(): number{
		return 10;
	}

	getMaxDistance(): number{
		return 5;
	}

	getPower(): number{
		return 5;
	}

	getName(): string{
		return this.name;
	}
}

export default Elf;
