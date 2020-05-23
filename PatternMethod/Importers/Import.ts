abstract class Import{
	constructor(public filename: string){}

	import(){
		this.openFile();
		this.readFile();

		let data = this.parseData();
		this.importItems(data);
	}

	private importItems(items: Array<any>){
		for(let elem of items)
			console.log(`Import ${elem}`);
	}

	abstract openFile();

	abstract readFile();

	abstract parseData(): Array<any>;
}

export default Import;
