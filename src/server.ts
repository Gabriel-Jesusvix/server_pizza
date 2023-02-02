import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import "express-async-errors";
import cors from "cors";
const app = express();
import path from "path";

app.use(express.json());

app.use(cors());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use(
  (
    error: Error,
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error.",
    });
  }
);
app.listen(3333, () => {
  console.log(`🔥 server listening on port 3333`);
});
