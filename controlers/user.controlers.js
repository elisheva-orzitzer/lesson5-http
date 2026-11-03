import express from "express";
const app = express();
app.use(express.json());
import { arrUsers } from "../data/users";

//קבלת כל המשמשים
const getAllUsers = (req, res) => {
  res.end(`the all users:${JSON.stringify(arrUsers)}`);
};

//קבלת משתמש לפי id
const getUserById = (req, res) => {
  const user = arrUsers.find((user) => user.id === +req.params.id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  res.json(user);
};

//הוספת משתמש
const createUser = (req, res) => {
  if (req.body.code && req.body.name && req.body.email && req.body.password) {
    arrUsers.push({...req.body,borrowedBooks: []});
    res.status(201).json(req.body);
  } else {
    res.status(409).json({ error: "missing data" });
  }
};