import express from "express";

const sleepTime = (ms: number) => new Promise(res => setTimeout(res, ms));

export default (app: express.Express, uri: string): void => {
  app.get(uri, async (_, response) => {
    await sleepTime(3000);
    response.json({ res: "OKEY" })
  })
}