import IHeroFactory from './IHeroFactory';
import IMovement from '../Movements/IMovement';
import IWeapon from '../Weapons/IWeapon';

import FlyMovement from '../Movements/FlyMovement';
import Arbalet from '../Weapons/Arbalet';

class ElfFactory implements IHeroFactory{
	createMovement(): IMovement{
		return new FlyMovement();
	}

	createWeapon(): IWeapon{
		return new Arbalet();
	}
}

export default ElfFactory;
