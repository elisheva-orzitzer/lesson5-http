import { allRouters } from "express";

import userallRouters from "./user.route.js";
import bookallRouters from "./book.route.js";


const allRouters = allRouters();


allRouters.use("/users", userallRouters);
allRouters.use("/books", bookallRouters);


export default allRouters;