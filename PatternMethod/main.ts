import JSONImport from './Importers/JSONImport';
import XMLImport from './Importers/XMLImport';

let json = new JSONImport('data.json'),
	xml = new XMLImport('data.xml');

json.import();
xml.import();
