import { describe, expect, test } from 'vitest';
import { Pokemon } from '../src/ejercicio-1/Pokemon';
import { Pokedex } from '../src/ejercicio-1/Pokedex';
import { Combat } from '../src/ejercicio-1/Combat';

describe('Pokemon Class Tests', () => {
        test('should create a Pokemon instance correctly', () => {
                const charmander = new Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
                expect(charmander.name).toBe("Charmander");
                expect(charmander.weight).toBe(8.5);
                expect(charmander.size).toBe(0.6);
                expect(charmander.type).toBe("Fire");
                expect(charmander.attack).toBe(60);
                expect(charmander.defense).toBe(50);
                expect(charmander.speed).toBe(65);
                expect(charmander.health).toBe(39);
        });
});

describe('Pokedex Class Tests', () => {
        test('should create a Pokedex instance and add Pokemon correctly', () => {
                const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
                const pokedex = new Pokedex(bulbasaur);
                expect(pokedex.register.length).toBe(1);
                expect(pokedex.register[0].name).toBe("Bulbasaur");
        });

        test('should search Pokemon by type correctly', () => {
                const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
                const charmander = new Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
                const pokedex = new Pokedex(bulbasaur, charmander);
                const grassPokemons = pokedex.SearchByType("Grass");
                expect(grassPokemons.length).toBe(1);
                expect(grassPokemons[0].name).toBe("Bulbasaur");
        });
});

describe('Combat Class Tests', () => {
        test('should create a Combat instance correctly', () => {
                const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
                const charmander = new Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
                const combat = new Combat(bulbasaur, charmander);
                expect(combat.rival_a.name).toBe("Bulbasaur");
                expect(combat.rival_b.name).toBe("Charmander");
        });

        test('should start a combat and determine the winner correctly', () => {
                const bulbasaur = new Pokemon("Bulbasaur", 6.9, 0.7, "Grass", [65, 65, 45, 45]);
                const charmander = new Pokemon("Charmander", 8.5, 0.6, "Fire", [60, 50, 65, 39]);
                const combat = new Combat(bulbasaur, charmander);
                const winner = combat.Start();
                expect(winner).toBe('Charmander');
        });
});