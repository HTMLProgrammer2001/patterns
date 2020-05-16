import Coffee from './Drinks/Coffee';
import Latte from './Drinks/Latte';

import Sugar from './Condiments/Sugar';
import Chocolate from './Condiments/Chocolate';
import Milk from './Condiments/Milk';

let coffee = new Coffee();

coffee = new Sugar(coffee);
coffee = new Sugar(coffee);
coffee = new Milk(coffee);

console.log(coffee.getDescription() + ': $' + coffee.cost());

let latte = new Latte();

latte = new Chocolate(latte);
latte = new Milk(latte);

console.log(latte.getDescription() + ': $' + latte.cost());
