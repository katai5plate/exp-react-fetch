import express from "express";
import bodyParser from "body-parser";

export default (app: express.Express, port?: number): void => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log(`API SERVER READY: ${port}`);
  })

  app.get("/", (_, response) => {
    response.json({ result: "READY" })
  })
}