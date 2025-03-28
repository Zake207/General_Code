"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Pokedex_1 = require("./Pokedex");
const Combat_1 = require("./Combat");
// Línea evolutiva de Charmander
let Charmander = new Pokemon_1.Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
let Charmeleon = new Pokemon_1.Pokemon("Charmeleon", 19.0, 1.1, "Fire", [80, 65, 80, 58]);
let Charizard = new Pokemon_1.Pokemon("Charizard", 90.5, 1.7, "Fire", [109, 85, 100, 78]);
// Línea evolutiva de Squirtle
let Squirtle = new Pokemon_1.Pokemon("Squirtle", 9.0, 0.5, "Water", [50, 64, 43, 44]);
let Wartortle = new Pokemon_1.Pokemon("Wartortle", 22.5, 1.0, "Water", [65, 80, 58, 59]);
let Blastoise = new Pokemon_1.Pokemon("Blastoise", 85.5, 1.6, "Water", [85, 105, 78, 79]);
// Línea evolutiva de Bulbasaur
let Bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
let Ivysaur = new Pokemon_1.Pokemon("Ivysaur", 13.0, 1.0, "Grass", [80, 80, 60, 60]);
let Venusaur = new Pokemon_1.Pokemon("Venusaur", 100.0, 2.0, "Grass", [100, 100, 80, 80]);
// Línea evolutiva de Pikachu
let Pichu = new Pokemon_1.Pokemon("Pichu", 2.0, 0.3, "Electric", [40, 35, 60, 20]);
let Pikachu = new Pokemon_1.Pokemon("Pikachu", 6.0, 0.4, "Electric", [55, 50, 90, 35]);
let Raichu = new Pokemon_1.Pokemon("Raichu", 30.0, 0.8, "Electric", [90, 80, 110, 60]);
let Airam = new Pokemon_1.Pokemon("El Bestia", 86, 1.7, "Fire", [1, 5, 1, 9999]);
let Izan = new Pokemon_1.Pokemon("El Menda", 80, 1.75, "Grass", [2, 10, 2, 9999]);
let PokedexKanto = new Pokedex_1.Pokedex(Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Pichu, Pikachu, Raichu, Airam, Izan);
PokedexKanto.PrintRegister();
let combate_1 = new Combat_1.Combat(Venusaur, Blastoise);
let combate_2 = new Combat_1.Combat(Blastoise, Venusaur);
combate_1.Start();
// combate_2.Start();
// console.log("Fire type pokemons:");
// PokedexKanto.SearchByType("Fire");
// console.log("Grass type pokemons:");
// PokedexKanto.SearchByType("Grass");
// console.log("Water type pokemons:");
// PokedexKanto.SearchByType("Water");
// console.log("Electric type pokemons:");
// PokedexKanto.SearchByType("Electric");
// console.log("Pokemons with 80 HP:");
// PokedexKanto.SearchByHealth(80);
// console.log("Pokemons with 80 attack:");
// PokedexKanto.SearchByAttack(80);
// console.log("Pokemons with 80 defense:");
// PokedexKanto.SearchByDefense(80);
// console.log("Pokemons with 80 speed:");
// PokedexKanto.SearchBySpeed(80);
