import express from "express";
const app = express();
app.use(express.json());
import arrUsers from "users.js"
console.log(arrUsers)

export const arrBooks = [
  {
    id: 101,
    name: "למידה מבוססת JavaScript",
    category: "תכנות",
    islend: true,
    price: 100,
  },
  {
    id: 102,
    name: "מבני נתונים ואלגוריתמים",
    category: "מדעי המחשב",
    islend: true,
    price: 120,
  },
  {
    id: 103,
    name: "המדריך המלא ל-Node.js",
    category: "תכנות",
    islend: false,
    price: 90,
  },
];


app.listen(5050);
