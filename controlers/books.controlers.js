import express from "express";
const app = express();
app.use(express.json());
import {arrBooks} from "../data/books"

const arrLend = [];

//קבלת כל הספרים 
// עם אופציה של סינון ע"פ שם 
//וכן איזה עמוד ומספר ספרים בעמוד
export const getAllBooks = (req, res) => {
  const { page = 1, limit = 10, name } = req.query;
  let result = name === null ? arrBooks : arrBooks.filter((na) => na.name === name);
  result = result.slice((page - 1) * limit, page * limit);
  res.end(`the books that we have the staff:${JSON.stringify(result)}`);
};

//קבלת ספר ע"פ מזהה id
export const getBookById = (req, res) => {
  const book = arrBooks.find((book) => book.id === +req.params.id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
};

//הכנסת ספר חדש עם הנתונים
export const addBook = (req, res) => {
  if (req.body.id && req.body.name && req.body.category && req.body.price) {
    arrBooks.push(req.body);
    res.status(201).json(req.body);
  } else {
    res.status(409).json({ error: "missing data" });
  }
};

//השאלת ספר- אם מושאל מחזיר הודאה מתאימה
export const lendBook = (req, res) => {
    const index = arrBooks.findIndex((p) => p.id === +req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  if (!arrBooks[index].islend) {
    arrBooks[index] = { ...req.body, islend: true };
    arrLend.push(req.body);
    res.json(req.body);
  } else {
    res.json("the book is already lend. sorry.");
  }
};

//החזרת ספר מהשאלה
export const returnBook = (req, res) => {
  const index = arrBooks.findIndex((p) => p.id ===+req.params.id);
  arrBooks[index] = { ...req.body, islend: false };
  res.json(req.body);
};

//מחיקת ספר מרשימת הספרים
export const deleteBook = (req, res) => {
  const id = +req.params.id;
  const index = arrBooks.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: "product not found" });
  } else {
    arrBooks.splice(index, 1);
    res.status(204).json();
  }
};




