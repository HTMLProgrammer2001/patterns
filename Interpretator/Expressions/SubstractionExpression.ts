import AbstractExpression from './AbstractExpression';


class SubstractionExpression implements AbstractExpression{
	private left: AbstractExpression;
	private right: AbstractExpression;

	interpreter(): number{
		return this.left.interpreter() - this.right.interpreter();
	}

	accept(char: string){
		return char == '-';
	}

	set(left: AbstractExpression, right: AbstractExpression){
		this.left = left;
		this.right = right;
	}
}

export default SubstractionExpression;
