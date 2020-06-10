interface IDevice{
	isEnabled(): boolean;
	enable();
	disable();

	getVolume(): number;
	setVolume(v: number);
}

export default IDevice;
