"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Pokemon_1 = require("../src/ejercicio-1/Pokemon");
const Pokedex_1 = require("../src/ejercicio-1/Pokedex");
const Combat_1 = require("../src/ejercicio-1/Combat");
(0, vitest_1.describe)('Pokemon Class Tests', () => {
    (0, vitest_1.test)('should create a Pokemon instance correctly', () => {
        const charmander = new Pokemon_1.Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
        (0, vitest_1.expect)(charmander.name).toBe("Charmander");
        (0, vitest_1.expect)(charmander.weight).toBe(8.5);
        (0, vitest_1.expect)(charmander.size).toBe(0.6);
        (0, vitest_1.expect)(charmander.type).toBe("Fire");
        (0, vitest_1.expect)(charmander.attack).toBe(60);
        (0, vitest_1.expect)(charmander.defense).toBe(50);
        (0, vitest_1.expect)(charmander.speed).toBe(65);
        (0, vitest_1.expect)(charmander.health).toBe(39);
    });
});
(0, vitest_1.describe)('Pokedex Class Tests', () => {
    (0, vitest_1.test)('should create a Pokedex instance and add Pokemon correctly', () => {
        const bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
        const pokedex = new Pokedex_1.Pokedex(bulbasaur);
        (0, vitest_1.expect)(pokedex.register.length).toBe(1);
        (0, vitest_1.expect)(pokedex.register[0].name).toBe("Bulbasaur");
    });
    (0, vitest_1.test)('should search Pokemon by type correctly', () => {
        const bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
        const charmander = new Pokemon_1.Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
        const pokedex = new Pokedex_1.Pokedex(bulbasaur, charmander);
        const grassPokemons = pokedex.SearchByType("Grass");
        (0, vitest_1.expect)(grassPokemons.length).toBe(1);
        (0, vitest_1.expect)(grassPokemons[0].name).toBe("Bulbasaur");
    });
});
(0, vitest_1.describe)('Combat Class Tests', () => {
    (0, vitest_1.test)('should create a Combat instance correctly', () => {
        const bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
        const charmander = new Pokemon_1.Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
        const combat = new Combat_1.Combat(bulbasaur, charmander);
        (0, vitest_1.expect)(combat.rival_a.name).toBe("Bulbasaur");
        (0, vitest_1.expect)(combat.rival_b.name).toBe("Charmander");
    });
    (0, vitest_1.test)('should start a combat and determine the winner correctly', () => {
        const bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
        const charmander = new Pokemon_1.Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
        const combat = new Combat_1.Combat(bulbasaur, charmander);
        const winner = combat.Start();
        (0, vitest_1.expect)(winner).toBe('Charmander');
    });
});
