import IFigure from './IFigure';

class Circle implements IFigure{
	constructor(public r: number){};

	clone(): IFigure{
		return new Circle(this.r);
	}

	getInfo(){
		console.log(`Circle with radius ${this.r}`);
	}
}

export default Circle;
