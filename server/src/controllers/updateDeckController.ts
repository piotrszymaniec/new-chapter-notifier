import { Request, Response } from "express";
import Deck from "../models/Webtoon";

export async function updateDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const newSchemaData = req.body  
  const deck = await Deck.findByIdAndUpdate(deckId, newSchemaData, {new: true});
  res.json(deck);
}
