import BookIterator from './BookIterator';
import Book from './Book';

class Library{
	private books = [
		new Book('Гарри Поттер', 'Джоанн Роулинг'),
		new Book('Песни льда и пламени', 'Джордж Мартин'),
		new Book('Шерлок Холмс', 'Артур Конан Дойль')
	];

	getBooks(): BookIterator{
		return new BookIterator(this.books);
	}
}

export default Library;