import express, { Request, Response } from "express";

import { hello } from "@functions/fn";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  hello("this is hot reloading and compiling");
  return res.send("hello world");
});

app.listen(3000);
