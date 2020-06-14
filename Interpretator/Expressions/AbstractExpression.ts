interface AbstractExpression{
	interpreter(): number;
	accept(char: string): boolean;
	set(left: AbstractExpression, right: AbstractExpression);
}

export default AbstractExpression;
