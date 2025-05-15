import { Book } from "../model/book.js";
import { BookRepository } from "../repository/book.repository.js";
export const BookService = {
	serviceBookValidation: async (id) => {
		const idBook = await BookRepository.getById(id);
		if (!idBook) return null;

		return idBook;
	},

	serviceBookCreation: (book) => {
		const dataBook = {
			...book,
			id: crypto.randomUUID().toString(),
		};

		const modelBook = new Book(
			dataBook.id,
			dataBook.title,
			dataBook.author,
			dataBook.isbn,
			dataBook.publishedDate,
			dataBook.availableCopies,
		);
		BookRepository.createOne(modelBook);
		//console.log(modelBook)
		return modelBook;
	},

	serviceBookDelete: (id) => {
		const idBook = BookRepository.deleteById(id);

		if (!idBook) return null;
		return idBook;
	},

	serviceBookUpdate: (
		id,
		title,
		author,
		isbn,
		publishedDate,
		availableCopies,
	) => {
		const book = BookRepository.updateById(
			id,
			title,
			author,
			isbn,
			publishedDate,
			availableCopies,
		);
		if (!book) return null;
		return book;
	},

	serviceBookGetAll: () => {
		const books = BookRepository.getAll();
		if (!books) return null;
		return books;
	},
};
