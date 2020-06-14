import IVisitor from '../Visitors/IVisitor';


interface IShape{
	draw();
	accept(v: IVisitor);
}

export default IShape;
