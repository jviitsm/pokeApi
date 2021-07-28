import { Ipokemon } from "../interfarces/pokemon.interface";
import { Pokemon } from "../model/pokemon.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";

export class PokemonService {
  public getWelcomeMessage(): string {
    return WELCOME_MESSAGE;
  }

  public findAll(): Promise<Ipokemon[]> {
    return Pokemon.find({}).exec();
  }

  public add(pokemon: Ipokemon): Promise<Ipokemon> {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }

  public async delete(id: string) {
    const deletedPokemon = await Pokemon.findByIdAndDelete(
      id
    ).exec();

    if (!deletedPokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return deletedPokemon;
  }
}
