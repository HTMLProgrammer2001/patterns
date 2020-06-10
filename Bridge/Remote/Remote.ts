import IDevice from '../Devices/IDevice';


class Remote{
	constructor(protected device: IDevice){};

	toggle(){
		if(this.device.isEnabled())
			this.device.disable();
		else
			this.device.enable();
	}

	volumeDown(){
		let vol = this.device.getVolume();

		this.device.setVolume(vol - 10);
	}

	volumeUp(){
		let vol = this.device.getVolume();

		this.device.setVolume(vol + 10);	
	}
}

export default Remote;
