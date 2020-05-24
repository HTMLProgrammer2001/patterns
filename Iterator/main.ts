import Library from './Library/Library';
import IIterator from './Library/Iterator';


let lib: Library = new Library(),
	books: IIterator = lib.getBooks();

while(books.hasNext())
	console.log(books.next().getName());
