import Bread from '../Bread';

abstract class BreadBuilder
{
    bread: Bread;

    createBread()
    {
        this.bread = new Bread();
    }

    abstract setFlour();
    abstract setSalt();
    abstract setAdditives();
}

export default BreadBuilder;
