import Component from './Component';

class TFile extends Component{
	constructor(name: string, private size: number){
		super(name);
	};

	getSize(): number{
		return this.size;
	}

	add(comp: Component){}

	remove(comp: Component){}

	print(){
		console.log(`File ${this.getName()}`);
	}
}

export default TFile;
