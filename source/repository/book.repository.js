import { JsonHandler } from "../utils/JsonManager.js";

export const BookRepository = {
	getById: async (id) => {
		const books = await JsonHandler.read();

		if (!books) return null;

		const book = books.find((book) => book.id == id);

		if (!book) return null;

		return book;
	},

	createOne: async (book) => {
		const books = await JsonHandler.read();
		books.push(book);
		try {
			await JsonHandler.write(books);
		} catch (e) {
			console.error({ message: e.message });
		}
	},

	deleteById: async (id) => {
		const books = await JsonHandler.read();
		if (!books) return null;
		const index = books.find((book) => book.id === id);
		//const index = books.find(book => book.id == id);
		if (!index) return null;
		//if(index === -1) return null;

		const booksResponse = books.filter((book) => book.id !== id);

		try {
			await JsonHandler.write(booksResponse);
			return id;
		} catch (e) {
			return null;
		}
	},

	updateById: async (
		id,
		title,
		author,
		isbn,
		publishedDate,
		availableCopies,
	) => {
		const books = await JsonHandler.read();
		if (!books) return null;

		const bookToBeModified = books.find((book) => book.id == id);
		if (!bookToBeModified) return null;

		const oldBooks = books.filter((book) => book.id !== id);

		const modifiedBook = {
			...bookToBeModified,
			title: title,
			author: author,
			isbn: isbn,
			publishedDate: publishedDate,
			availableCopies: availableCopies,
		};

		try {
			await JsonHandler.write([...oldBooks, modifiedBook]);
			return modifiedBook;
		} catch (e) {
			return null;
		}
	},

	getAll: async () => {
		const books = await JsonHandler.readTestFile();

		if (!books) return null;
		return books;
	},
};
