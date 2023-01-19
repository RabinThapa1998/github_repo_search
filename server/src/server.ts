import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { indexDashboardRouter } from "./routes/v1/dashboard";
import { NotFoundError } from "./common/errors/not-found-error";
import { errorHandler } from "./common/middlewares/error-handler";
import config from "./config";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/dashboard", indexDashboardRouter);
app.all("/", async (req, res) => {
  res.status(200).send("ALL END POINT!");
});
app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(config.app.port, () => {
  console.log(`Listening on port ${config.app.port}`);
});
