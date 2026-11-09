import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import allRouters from "./router/index.router.js";

import { addDate, printDate, blockDays } from "./middlewaresFolder/myMiddlewares.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});

app.use(limiter);

app.use(addDate);
app.use(printDate);
app.use(blockDays);

app.use("/", allRouters);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
