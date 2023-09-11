import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getWebtoonsController } from "./controllers/getWebtoonsController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { updateDeckController } from "./controllers/updateDeckController";
import { getDeckController } from "./controllers/getDeckController";
// import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/webtoons", getWebtoonsController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.put("/decks/:deckId", updateDeckController);
app.get("/decks/:deckId", getDeckController);
// app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
