import AbstractExpression from './Expressions/AbstractExpression';
import LiteralExpression from './Expressions/LiteralExpression';
import AdditionalExpression from './Expressions/AdditionalExpression';
import SubstractionExpression from './Expressions/SubstractionExpression';
import MultiplyExpression from './Expressions/MultiplyExpression';
import DivideExpression from './Expressions/DivideExpression';


class Executor{
	private expressions: Array<AbstractExpression> = [new AdditionalExpression, new SubstractionExpression, 
		new MultiplyExpression, new DivideExpression];

	execute(context: string): AbstractExpression{
		let curIndex = context.length - 1,
			val = '';

		console.log(context);

		while(curIndex >= 0)
			if(context[curIndex].match(/[\d.]/))
				val += context[curIndex--];
			else
				for(let expr of this.expressions)
					if(expr.accept(context[curIndex])){
						expr.set(
							this.execute(context.slice(0, curIndex)),
							new LiteralExpression(val.split('').reverse().join('')),
						);

						return expr;
					}

		if(val)
			return new LiteralExpression(val.split('').reverse().join(''));
	}
}

export default Executor;
