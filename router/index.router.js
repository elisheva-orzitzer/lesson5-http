import { Router  } from "express";

import userallRouters from "./user.route.js";
import bookallRouters from "./book.route.js";


const allRouters = Router();


allRouters.use("/users", userallRouters);
allRouters.use("/books", bookallRouters);


export default allRouters;