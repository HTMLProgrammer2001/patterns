import IHeroFactory from './IHeroFactory';
import IMovement from '../Movements/IMovement';
import IWeapon from '../Weapons/IWeapon';

import RunMovement from '../Movements/RunMovement';
import Sword from '../Weapons/Sword';

class VoinFactory implements IHeroFactory{
	createMovement(): IMovement{
		return new RunMovement();
	}

	createWeapon(): IWeapon{
		return new Sword();
	}
}

export default VoinFactory;
