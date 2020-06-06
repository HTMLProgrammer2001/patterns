import IFigure from './Figures/IFigure';
import Rectangle from './Figures/Rectangle';
import Circle from './Figures/Circle';

let rect: IFigure = new Rectangle(10, 20),
	c: IFigure = new Circle(20);

rect.getInfo();
c.getInfo();

let r2 = rect.clone() as Rectangle,
	c2 = c.clone() as Circle;

r2.w = 40;
c2.r = 50;

r2.getInfo();
c2.getInfo();
