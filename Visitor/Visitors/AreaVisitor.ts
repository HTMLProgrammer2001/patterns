import IVisitor from './IVisitor';
import Circle from '../Shapes/Circle';
import Square from '../Shapes/Square';
import Rectangle from '../Shapes/Rectangle';


class AreaVisitor implements IVisitor{
	visitCircle(circle: Circle){
		return Math.PI * circle.getRadius() ** 2;
	}

	visitRectangle(rect: Rectangle){
		return rect.getHeight() * rect.getWidth();
	}

	visitSquare(square: Square){
		return square.getSide() ** 2;
	}
}

export default AreaVisitor;
