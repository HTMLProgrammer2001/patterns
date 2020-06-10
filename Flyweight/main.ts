import Game from './Game';

let game = new Game();

async function loop(){
	if(game.player.isAlive()){
		game.draw();
		await game.update();

		loop();
	}
	else
		console.log('You loose');
}

loop();
