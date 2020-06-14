import AreaVisitor from './Visitors/AreaVisitor';
import PerimeterVisitor from './Visitors/PerimeterVisitor';

import IShape from './Shapes/IShape';
import Circle from './Shapes/Circle';
import Square from './Shapes/Square';
import Rectangle from './Shapes/Rectangle';


let shapes: Array<IShape> = [new Circle(10), new Square(5), new Rectangle(20, 15)],
	areaVisitor = new AreaVisitor(),
	perimeterVisitor = new PerimeterVisitor();

console.log(shapes.reduce((prev: number, shape: IShape) => prev + shape.accept(areaVisitor), 0));
console.log(shapes.reduce((prev: number, shape: IShape) => prev + shape.accept(perimeterVisitor), 0));
