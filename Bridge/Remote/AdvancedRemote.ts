import Remote from './Remote';


class AdvancedRemote extends Remote{
	mute(){
		this.device.setVolume(0);
	}
}

export default AdvancedRemote;
