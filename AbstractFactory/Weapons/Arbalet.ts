import IWeapon from './IWeapon';

class Arbalet implements IWeapon{
	hit(){
		console.log('Hit from arbalet');
	}
}

export default Arbalet;
