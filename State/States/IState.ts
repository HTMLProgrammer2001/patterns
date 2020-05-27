import ICard from '../Card/ICard';

interface State{
	insertCard(card: ICard);
	typePassword(password: string);
	raise(sum: number);
	returnCard(): ICard;
}

export default State;
