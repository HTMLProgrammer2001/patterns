import IMovement from './IMovement';

class FlyMovement implements IMovement{
	move(){
		console.log('Fly');
	}
}

export default FlyMovement;
