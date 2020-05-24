import Editor from './System/Editor';
import Compiler from './System/Compiler';
import Runner from './System/Runner';

class IDEFacade{
	constructor(public editor: Editor, public compiler: Compiler, public runner: Runner){}

	start(){
		this.editor.createCode();
		this.editor.saveCode();
		this.compiler.compile();
		this.runner.run();
	}

	stop(){
		this.runner.finish();
	}
}

export default IDEFacade;
