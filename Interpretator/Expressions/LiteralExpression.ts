import AbstractExpression from './AbstractExpression';


class LiteralExpression implements AbstractExpression{
	constructor(private val: string){};

	interpreter(): number{
		return +this.val;
	}

	accept(char: string){
		return !!char.match(/[\d.]/);
	}

	set(left: AbstractExpression, right: AbstractExpression){}
}

export default LiteralExpression;
