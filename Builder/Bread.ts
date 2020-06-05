class Bread{
	flour: string;
	salt: boolean = false;
	additives: string = 'Нет';

	printComponents(){
		console.log(this.flour, this.salt, this.additives);
	}
}

export default Bread;
