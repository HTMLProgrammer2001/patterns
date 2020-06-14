import IShape from './IShape';
import IVisitor from '../Visitors/IVisitor';


class Circle implements IShape{
	constructor(private radius: number){};

	draw(){
		console.log(`Draw circle with radius ${this.radius}`);
	}

	getRadius(): number{
		return this.radius;
	}

	accept(v: IVisitor){
		return v.visitCircle(this);
	}
}

export default Circle;
