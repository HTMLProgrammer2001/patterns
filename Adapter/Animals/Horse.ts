import Animal from './Animal';

class Horse implements Animal{
	run(): void{
		console.log('Horse is run');
	}
}

export default Horse;
