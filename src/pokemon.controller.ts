import { request, Request, Response, Router } from "express";
import { PokemonService } from "./services/pokemon.service";

export class PokemonController {
  public router = Router();

  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.sayHello);
    this.router.post("/", this.add);
    this.router.get("/all", this.findAll);
    this.router.route("/:id").delete(this.delete);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.getWelcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async (_: Request, res: Response) => {
    try {
      const pokemon = await this.pokemonService.findAll();
      res.send(pokemon);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  private add = async (_: Request, res: Response) => {
    try {
      const addPokemonResult = await this.pokemonService.add(_.body);
      res.send(addPokemonResult);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  private delete = async (req: Request, res: Response) => {
    try {
      const deletedPokemonResult = await this.pokemonService.delete(
        req.params.id
      );
      res.send(deletedPokemonResult);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}
