import Programmer from './Programmer';
import Editor from './System/Editor';
import Compiler from './System/Compiler';
import Runner from './System/Runner';
import IDEFacade from './IDEFacade';

let editor = new Editor(),
	compiler = new Compiler(),
	runner = new Runner(),
	ide = new IDEFacade(editor, compiler, runner),
	programmer = new Programmer(ide);

programmer.createApplication();
