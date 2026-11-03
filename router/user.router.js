import { routerUsers } from "express";
import { 
  getAllUsers, 
  getUserById, 
  createUser 
} from "../controlers/user.controlers"
const routerUsers = routerUsers();

routerUsers.get("/", getAllUsers);
routerUsers.get("/:id", getUserById);
routerUsers.post("/", createUser);

export default routerUsers;