import IShape from './IShape';
import IVisitor from '../Visitors/IVisitor';


class Rectangle implements IShape{
	constructor(private width: number, private height: number){};

	draw(){
		console.log(`Draw rectangle with width ${this.width} and height ${this.height}`);
	}

	getWidth(): number{
		return this.width;
	}

	getHeight(): number{
		return this.height;
	}

	accept(v: IVisitor){
		return v.visitRectangle(this);
	}
}

export default Rectangle;
