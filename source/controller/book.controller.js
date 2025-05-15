import { BookService } from "../service/book.service.js";

export const BookController = {
	bookValidation: async (req, res) => {
		const { id } = req.params;
		const book = await BookService.serviceBookValidation(id);

		if (!book) {
			res.status(404).json({
				payload: null,
				message: "No se encuentra el libro",
				ok: false,
			});
		} else {
			res.status(200).json({
				payload: { book },
				message: "Exito encontrando el libro",
				ok: true,
			});
		}
	},

	bookCreateOne: async (req, res) => {
		const { book } = req.body;

		try {
			const bookResponse = BookService.serviceBookCreation(book);
			res.status(200).json({
				payload: { ...bookResponse, id: "****" },
				message: "Exito creando el libro",
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ error: e.message, mensaje: "ocurrio un error" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el libro",
				ok: false,
			});
		}
	},

	bookDeleteOne: async (req, res) => {
		const { id } = req.params;
		const idBook = await BookService.serviceBookDelete(id);

		if (!idBook) {
			res.status(400).json({
				payload: null,
				message: "El libro no pudo ser borrado",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			payload: { idBook },
			message: `Libro:${idBook} borrado con exito`,
			ok: true,
		});
		return;
	},

	bookUpdateOne: async (req, res) => {
		const { id } = req.params;
		const { title, author, isbn, publishedDate, availableCopies } = req.body;
		const bookUpdated = await BookService.serviceBookUpdate(
			id,
			title,
			author,
			isbn,
			publishedDate,
			availableCopies,
		);

		if (!bookUpdated) {
			res.status(404).json({
				payload: null,
				message: "No se pudo actualizar el libro",
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: `Libro: ${bookUpdated.id} actualizada con exito`,
			payload: { bookUpdated },
			ok: true,
		});
		return;
	},

	bookGetAll: async (req, res) => {
		const allBooks = await BookService.serviceBookGetAll();

		if (!allBooks) {
			res.status(404).json({
				payload: null,
				message: "No se pudo devolver la coleccion de prueba para examen",
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: "Coleccion de prueba para examen devuelta con exito",
			payload: { allBooks },
			ok: true,
		});
	},
};
