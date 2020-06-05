import BreadBuilder from './BreadBuilder';

class WhiteBreadBuilder extends BreadBuilder
{
    setFlour()
    {
        this.bread.flour = "Пшеничная мука высший сорт";
    }
 
    setSalt()
    {
        this.bread.salt = true;
    }
 
    setAdditives()
    {
        this.bread.additives = "улучшитель хлебопекарный";
    }
}

export default WhiteBreadBuilder;
