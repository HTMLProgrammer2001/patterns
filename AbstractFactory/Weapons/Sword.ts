import IWeapon from './IWeapon';

class Sword implements IWeapon{
	hit(){
		console.log('Sword hit');
	}
}

export default Sword;
