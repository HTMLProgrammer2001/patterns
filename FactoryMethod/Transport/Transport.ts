abstract class Transport{
	deliver(distance){
		let hours = distance/this.getSpeed();
		console.log(`${this.getName()} deliver by ${hours} hours`);
	}

	abstract getSpeed(): number;
	abstract getName(): string;
}

export default Transport;
