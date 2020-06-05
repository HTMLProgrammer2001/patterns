import IWeapon from '../Weapons/IWeapon';
import IMovement from '../Movements/IMovement';


interface IHeroFactory{
	createWeapon(): IWeapon;
	createMovement(): IMovement;
}

export default IHeroFactory;
