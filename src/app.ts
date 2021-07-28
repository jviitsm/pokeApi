import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./services/pokemon.service";
import mongoose from "mongoose";
import { MONGO_URL } from "./constants/pokeApi.constants";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    // Creating a new instance of our Pokemon Controller
    const pokemonController = new PokemonController(new PokemonService());

    // Telling express to use our Controller's routes
    this.app.use("/pokemon", pokemonController.router);
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
  }
}

export default new App().app;
