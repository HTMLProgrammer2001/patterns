import IEnemyType from './EnemyTypes/IEnemyType';
import Voin from './EnemyTypes/Voin';
import Elf from './EnemyTypes/Elf';


class EnemyFactory{
	private types: Array<IEnemyType> = [];

	getType(name: string): IEnemyType{
		let type = this.findType(name);

		return type ?? this.createType(name);
	}

	findType(name: string): IEnemyType{
		for(let i = 0; i < this.types.length; i++)
			if(name == this.types[i].getName())
				return this.types[i];

		return null;
	}

	createType(name: string): IEnemyType{
		let type: IEnemyType = null;

		switch(name){
			case 'Voin':
				type = new Voin();
				break;
			case 'Elf':
				type = new Elf();
		}

		return type;
	}
}

export default EnemyFactory;
