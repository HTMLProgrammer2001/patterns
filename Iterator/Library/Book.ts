class Book{
	constructor(private name: string, private authors: string){}

	getName(): string{
		return this.name;
	}

	getAuthors(): string{
		return this.authors;
	}
}

export default Book;
