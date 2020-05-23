import Import from './Import';

class XMLImport extends Import{
	openFile(){
		console.log(`Open xml file ${this.filename}`);
	}

	readFile(){
		console.log(`Read xml file ${this.filename}`);
	}

	parseData(){
		console.log('Parse xml data');

		return [
			'First',
			'Second'
		];
	}
}

export default XMLImport;
