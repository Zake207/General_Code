import { Type, Pokemon } from "./Pokemon";

/**
 * @description This class is used to create a Pokedex.
 * @class Pokedex
 * @implements {Pokemon}
 * @method PrintRegister
 * @method SearchByType
 * @method SearchByName
 * @method SearchBySize
 * @method SearchByWeight
 * @method SearchByAttack
 * @method SearchByDefense
 * @method SearchBySpeed
 * @method SearchByHealth
 * @method Include
 * @method constructor
 * @method get register
 */
export class Pokedex {
  // Atributes

  #register: Pokemon[] = [];

  // Functions

  /**
   * @description This function is used to create a Pokedex.
   * @param pokemons Pokemons to register in the Pokedex.
   */
  constructor(...pokemons: Pokemon[]) {
    if (pokemons.length === 0) {
      console.log("Pokedex initialized...");
    } else {
      console.log("Pokedex initialized with " + pokemons.length + " species!!");
      this.#register = pokemons;
    }
  }

  /**
   * @description This function is used to get the register of the Pokedex.
   * @returns Register of the Pokedex.
   */
  get register() {
    return this.#register;
  }

  /**
   * @description This function is used to print the register of the Pokedex.
   * @returns void
   */
  PrintRegister() {
    this.#register.forEach((pokemon, index) => {
      console.log(
        "#" + (index + 1) + "  ======================================",
      );
      console.log(pokemon.Data());
    });
  }

  /**
   * @description This function is used to search pokemons by type.
   * @param type Type of the Pokemon.
   * @returns Pokemon[] Pokemons with the type.
   */
  SearchByType(type: Type): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.type === type) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * @description This function is used to search pokemons by name.
   * @param name Name of the Pokemon.
   * @returns Pokemon[] Pokemons with the name.
   */
  SearchByName(name: string): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.name.toLowerCase() === name.toLowerCase()) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by size
   * @param size size of the pokemon
   * @returns All the pokemons with the size
   */
  SearchBySize(size: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.size === size) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by weight
   * @param weight weight of the pokemon
   * @returns All the pokemons with the weight
   */
  SearchByWeight(weight: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.weight === weight) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by attack
   * @param attack attack of the pokemon
   * @returns All the pokemons with the attack
   */
  SearchByAttack(attack: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.attack === attack) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by defense
   * @param defense defense of the pokemon
   * @returns All the pokemons with the defense
   */
  SearchByDefense(defense: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.defense === defense) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by speed
   * @param speed speed of the pokemon
   * @returns All the pokemons with the speed
   */
  SearchBySpeed(speed: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.speed === speed) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to search by health
   * @param health health of the pokemon
   * @returns All the pokemons with the health
   */
  SearchByHealth(health: number): Pokemon[] {
    let result: Pokemon[] = [];
    this.#register.forEach((pokemon, index) => {
      if (pokemon.health === health) {
        result.push(pokemon);
        console.log(
          "#" + (index + 1) + "  ======================================",
        );
        console.log(pokemon.Data());
      }
    });
    return result;
  }

  /**
   * Function to include a pokemon in the pokedex
   * @param pokemon pokemon to include
   * @returns boolean if the pokemon is included
   */
  Include(pokemon: Pokemon): boolean {
    let pokemon_included = false;
    this.#register.forEach((specie) => {
      if (pokemon === specie) {
        pokemon_included = true;
      }
    });
    return pokemon_included;
  }
}
