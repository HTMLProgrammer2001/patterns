import IDevice from './IDevice';


class Radio implements IDevice{
	private enabled: boolean = false;
	private volume: number = 50;

	isEnabled(){
		return this.enabled;
	}

	enable(){
		console.log('Enable radio');

		this.enabled = true;
	}

	disable(){
		console.log('Disable radio');

		this.enabled = false;
	}

	getVolume(): number{
		return this.volume;
	}

	setVolume(v: number){
		console.log(`Set volume to ${v}`);

		if(v >= 0 && v <= 100)
			this.volume = v;
	}
}

export default Radio;
