import { Request, Response } from "express";
import Deck from "../models/Webtoon";

export async function createDeckController(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req.body.title,
  });
  console.log(newDeck)
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}
