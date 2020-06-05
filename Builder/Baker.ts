import BreadBuilder from './BreadBuilders/BreadBuilder';
import Bread from './Bread';

class Baker
{
    bake(breadBuilder: BreadBuilder): Bread
    {
        breadBuilder.createBread();
        breadBuilder.setFlour();
        breadBuilder.setSalt();
        breadBuilder.setAdditives();
        return breadBuilder.bread;
    }
}

export default Baker;
