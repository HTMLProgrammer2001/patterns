import Player from './Player';
import EnemyFactory from './Enemies/EnemyFactory';
import EnemyContext from './Enemies/EnemyContext';
import IEnemyType from './Enemies/EnemyTypes/IEnemyType';

import * as readline from 'readline';


let types: Array<string> = ['Voin', 'Elf'];

class Game{
	player: Player = new Player();
	factory: EnemyFactory = new EnemyFactory();
	r = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	enemies: Array<EnemyContext> = [];

	constructor(){
		for(let i = 0; i < 3; i++)
			this.addEnemyContext();

		this.player = new Player();
	}

	async update(){
		await this.move();

		this.enemies = this.enemies.filter((enemy) => enemy.isAlive());

		this.enemies.forEach( (enemy) => {
			enemy.shoot(this.player);
			enemy.move(this.player);
		});

		if(this.enemies.length < 3)
			this.addEnemyContext();
	}

	async move(){
		return new Promise((resolve, error) => {
			this.r.question("Enter enemy id: ", async (id) => {
				let n = parseInt(id);

				if(isNaN(n) || n < 0 || n >= this.enemies.length){
					console.log('Enter valid enemy id');

					await this.move();

					resolve();
				}

    			this.player.shoot(this.enemies[n]);

    			console.log();
    			console.log(`You damaged ${n} enemy`);

    			if(!this.enemies[n].isAlive())
    				console.log('And kill it');

    			console.log();

    			resolve();
			});
		});		
	}

	draw(){
		this.enemies.forEach((enemy, i) => {
			console.log(`${i} Player:`);

			enemy.draw();
		});

		console.log();
		console.log(`Your health is ${this.player.getHealth()}`);
	}

	getEnemyType(name: string): IEnemyType{
		return this.factory.getType(name);
	}

	addEnemyContext(){
		let randIndex = Math.round(Math.random() * (types.length - 1)),
			ctx = new EnemyContext(
				Math.round(Math.random() * 10),
				Math.round(Math.random() * 10),
				this.getEnemyType(types[randIndex])
			);

		this.enemies.push(ctx);

		return ctx;
	}
}

export default Game;
