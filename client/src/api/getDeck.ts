import { API_URL } from "./config";
import { TDeck } from "./model";

export async function getDeck(deckId: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}`);
  return response.json();
}
