import IIterator from './Iterator';
import Book from './Book';

class BookIterator implements IIterator{
	private current: number = 0;

	constructor(private books: Array<Book>){};

	next(): Book{
		return this.books[this.current++];
	}

	hasNext(): boolean{
		return this.current < this.books.length;
	}
}

export default BookIterator;
