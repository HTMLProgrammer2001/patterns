import Component from './Component';

class Folder extends Component{
	private files: Array<Component> = [];

	getSize(): number{
		return this.files.reduce((acc: number, file: Component) => acc + file.getSize(), 0);
	}

	add(comp: Component){
		if(this.files.includes(comp))
			return;

		this.files.push(comp);
	}

	remove(comp: Component){
		let index = this.files.findIndex((file) => file == comp);

		if(!~index)
			return;

		this.files.splice(index, 1);
	}

	print(){
		console.log(`Folder ${this.getName()}`);

		this.files.forEach((file) => {
			file.print();
		});
	}
}

export default Folder;
