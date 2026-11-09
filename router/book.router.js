import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  lendBook,
  returnBook,
  deleteBook,
} from "../controlers/books.controlers";

const booksRouter = Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBookById);
booksRouter.post("/", addBook);
booksRouter.put("/lend/:id", lendBook);
booksRouter.put("/return/:id", returnBook);
booksRouter.delete("/:id", deleteBook);

export default booksRouter;
