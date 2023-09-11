import { Request, Response } from "express";
import Webtoon from "../models/Webtoon";

export async function getWebtoonsController(req: Request, res: Response) {
  const decks = await Webtoon.find();
  res.json(decks);
}
