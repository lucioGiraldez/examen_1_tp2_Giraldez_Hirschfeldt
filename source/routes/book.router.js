import { Router } from "express";
import { BookController } from "../controller/book.controller.js";

const bookRouter = Router();

bookRouter.get("/book/:id", BookController.bookValidation);
bookRouter.get("/json_file", BookController.bookGetAll);
bookRouter.post("/book", BookController.bookCreateOne);
bookRouter.put("/book/:id", BookController.bookUpdateOne);
bookRouter.delete("/book/:id", BookController.bookDeleteOne);

export { bookRouter };
