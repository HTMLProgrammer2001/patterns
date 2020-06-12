import HeroMemento from './HeroMemento';


class Hero{
	private patrons: number = 10;
	private lives: number = 3;

	shoot(){
		if(this.patrons > 0)
			this.patrons--;

		console.log(`You have ${this.patrons} patrons`);
		console.log('');
	}

	die(){
		if(this.lives > 0)
			this.lives--;

		console.log(`You have ${this.lives} lives`);
		console.log('');
	}

	save(): HeroMemento{
		return new HeroMemento(this.patrons, this.lives);
	}

	restore(m: HeroMemento){
		this.patrons = m.patrons;
		this.lives = m.lives;

		console.log(`You have ${this.lives} lives`);
		console.log(`You have ${this.patrons} patrons`);	
		console.log('');
	}
}

export default Hero;
