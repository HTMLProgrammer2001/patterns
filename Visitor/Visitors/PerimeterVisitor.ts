import IVisitor from './IVisitor';
import Circle from '../Shapes/Circle';
import Square from '../Shapes/Square';
import Rectangle from '../Shapes/Rectangle';


class PerimeterVisitor implements IVisitor{
	visitCircle(circle: Circle){
		return 2 * Math.PI * circle.getRadius();
	}

	visitRectangle(rect: Rectangle){
		return (rect.getHeight() + rect.getWidth()) * 2;
	}

	visitSquare(square: Square){
		return square.getSide() * 4;
	}
}

export default PerimeterVisitor;
