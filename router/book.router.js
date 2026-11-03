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

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.put("/lend/:id", lendBook);
router.put("/return/:id", returnBook);
router.delete("/:id", deleteBook);

export default router;
