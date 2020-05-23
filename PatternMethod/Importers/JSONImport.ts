import Import from './Import';

class JSONImport extends Import{
	openFile(){
		console.log(`Open json file ${this.filename}`);
	}

	readFile(){
		console.log(`Read json file ${this.filename}`);
	}

	parseData(){
		console.log('Parse json data');

		return [
			'First',
			'Second'
		];
	}
}

export default JSONImport;
