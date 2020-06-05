import IMovement from './IMovement';

class RunMovement implements IMovement{
	move(){
		console.log('Run');
	}
}

export default RunMovement;
