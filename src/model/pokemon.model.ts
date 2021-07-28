import { Ipokemon } from "../interfarces/pokemon.interface";
import { model, Schema } from "mongoose";

const pokemonSchema = new Schema({
  name: { type: String, required: [true, "Field is required"] },
  gender: { type: String, required: [true, "Field is required"] },
  type: { type: String, required: [true, "Field is required"] },
  height: { type: Number, required: [true, "Field is required"] },
  weight: { type: Number, required: [true, "Field is required"] },
  photo: { type: String, required: [true, "Field is required"] },
});

export const Pokemon = model<Ipokemon>("Pokemon", pokemonSchema);

