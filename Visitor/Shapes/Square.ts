import IShape from './IShape';
import IVisitor from '../Visitors/IVisitor';


class Square implements IShape{
	constructor(private side: number){};

	draw(){
		console.log(`Draw square with side ${this.side}`);
	}

	getSide(): number{
		return this.side;
	}

	accept(v: IVisitor){
		return v.visitSquare(this);
	}
}

export default Square;
