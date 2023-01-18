import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { indexDashboardRouter } from "./routes/v1/dashboard";
import { NotFoundError } from "./common/errors/not-found-error";
import { errorHandler } from "./common/middlewares/error-handler";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api/v1/dashboard", indexDashboardRouter);
app.all("/", async (req, res) => {
  res.status(200).send("ALL END POINT!");
});
app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Listening on port 8000!");
});
