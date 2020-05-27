import Card from './Card/Card';
import BankMachine from './BankMachine';

let card = new Card('Yuri', 2000, '123456'),
	bankMachine = new BankMachine;

bankMachine.typePassword('123456'); //will show error message
bankMachine.insertCard(card);

bankMachine.raise(1000); //will show error message
bankMachine.typePassword('14456'); //will show error message
bankMachine.typePassword('123456');

bankMachine.raise(1000);

bankMachine.returnCard();
