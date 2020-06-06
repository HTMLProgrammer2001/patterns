import IFigure from './IFigure';

class Rectangle implements IFigure{
	constructor(public w: number, public h: number){};

	clone(): IFigure{
		return new Rectangle(this.w, this.h);
	}

	getInfo(){
		console.log(`Rectangle ${this.w}:${this.h}`);
	}
}

export default Rectangle;
