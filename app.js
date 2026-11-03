import createApp, { json } from 'express';
import {allRouters} from "./router/index.router"
const app = createApp();


app.use("/",allRouters)
app.use(json());