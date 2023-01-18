import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(8000, () => {
  console.log("Listening on port 8000!");
});
