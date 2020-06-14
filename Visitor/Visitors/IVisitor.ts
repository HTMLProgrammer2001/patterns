import Circle from '../Shapes/Circle';
import Square from '../Shapes/Square';
import Rectangle from '../Shapes/Rectangle';


interface IVisitor{
	visitCircle(c: Circle);
	visitRectangle(r: Rectangle);
	visitSquare(s: Square);
}

export default IVisitor;
