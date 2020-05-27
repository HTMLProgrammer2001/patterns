interface ICard{
	checkPassword(password: string): boolean;
	getOwner(): string;
	getCost(password: string): number;
	raiseCost(cost: number, password?: string): boolean;
}

export default ICard;
