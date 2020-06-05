import BreadBuilder from './BreadBuilder';

class RyeBreadBuilder extends BreadBuilder
{
    setFlour()
    {
        this.bread.flour = "Ржаная мука 1 сорт";
    }
 
    setSalt()
    {
        this.bread.salt = true;
    }
 
    setAdditives()
    {
        // не используется
    }
}

export default RyeBreadBuilder;
