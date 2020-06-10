import AdvancedRemote from './Remote/AdvancedRemote';
import Radio from './Devices/Radio';


let radio = new Radio(),
    remote = new AdvancedRemote(radio);

remote.toggle();
remote.volumeUp();
remote.mute();
remote.toggle();
