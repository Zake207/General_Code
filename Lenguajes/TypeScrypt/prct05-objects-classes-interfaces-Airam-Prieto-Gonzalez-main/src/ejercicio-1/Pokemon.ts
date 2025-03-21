/**
 * @file Pokemon.ts
 * @version 1.0
 * @description This file contains the class Pokemon and the type Type.
 *
 */

/**
 * @type Type
 * @description This type is used to define the type of the Pokemon.
 * @values "Water" | "Fire" | "Grass" | "Electric"
 */
export type Type = "Fire" | "Water" | "Grass" | "Electric";

/**
 * @type Type_number_code
 * @description This type is used to assign a number to each type.
 * @values 0 | 1 | 2 | 3
 */
export enum Type_number_code {
  Fire,
  Water,
  Grass,
  Electric,
}

/**
 * @type Type_table
 * @description This matrix is used to define the type table.
 */
export const Type_table: number[][] = [
  [1, 0.5, 2, 1],
  [2, 1, 0.5, 0.5],
  [0.5, 2, 1, 1],
  [1, 2, 1, 1],
];

/**
 * @class Pokemon
 * @description This class is used to define a Pokemon.
 * @attributes #name: string
 * @attributes #weight: number
 * @attributes #size: number
 * @attributes #type: Type
 * @attributes #stats: [attack: number, defense: number, speed: number, health: number]
 * @methods Data(): string
 * @methods get name(): string
 * @methods get weight(): number
 * @methods get size(): number
 * @methods get type(): Type
 * @methods get attack(): number
 * @methods get defense(): number
 * @methods get speed(): number
 * @methods get health(): number
 * @constructor Pokemon(name: string, weight: number, size: number, type: Type, stats: [attack: number, defense: number, speed: number, health: number])
 */
export class Pokemon {
  // Atributes

  #name: string;
  #weight: number;
  #size: number;
  #type: Type;
  #stats: [attack: number, defense: number, speed: number, health: number];

  // Functions

  /**
   * @description This function is used to create a Pokemon.
   * @param name Name of the Pokemon.
   * @param weight Weight of the Pokemon in kg.
   * @param size Size of the Pokemon in meters.
   * @param type Type of the Pokemon.
   * @param stats Stats of the Pokemon: [attack, defense, speed, health].
   */
  constructor(
    name: string,
    weight: number,
    size: number,
    type: Type,
    stats: [attack: number, defense: number, speed: number, health: number],
  ) {
    this.#name = name;
    this.#weight = weight;
    this.#size = size;
    this.#type = type;
    this.#stats = stats;
  }

  /**
   * @description This function is used to get the name of the Pokemon.
   * @returns Name of the Pokemon.
   */
  get name() {
    return this.#name;
  }

  /**
   * @description This function is used to get the weight of the Pokemon.
   * @returns Weight of the Pokemon in kg.
   */
  get weight() {
    return this.#weight;
  }

  /**
   * @description This function is used to get the size of the Pokemon.
   * @returns Size of the Pokemon in meters.
   */
  get size() {
    return this.#size;
  }

  /**
   * @description This function is used to get the type of the Pokemon.
   * @returns Type of the Pokemon.
   */
  get type() {
    return this.#type;
  }

  /**
   * @description This function is used to get the attack of the Pokemon.
   * @returns Attack of the Pokemon.
   */
  get attack() {
    return this.#stats[0];
  }

  /**
   * @description This function is used to get the defense of the Pokemon.
   * @returns Defense of the Pokemon.
   */
  get defense() {
    return this.#stats[1];
  }

  /**
   * @description This function is used to get the speed of the Pokemon.
   * @returns Speed of the Pokemon.
   */
  get speed() {
    return this.#stats[2];
  }

  /**
   * @description This function is used to get the health of the Pokemon.
   * @returns Health of the Pokemon.
   */
  get health() {
    return this.#stats[3];
  }

  /**
   * @description This function is used to get the data of the Pokemon.
   * @returns Data of the Pokemon.
   */
  Data(): string {
    let data: string = "";
    data += "\nPOKEMON:   " + this.name;
    data += "\nTYPE:      " + this.type;
    data +=
      "\nDIMENSIONS:\n\tWEIGHT:   " +
      this.weight +
      " kg.\n\tSIZE:     " +
      this.size +
      " m.";
    data +=
      "\nSTATS:\n\tHEALTH:   " +
      this.health +
      "\tDEFENSE:   " +
      this.defense +
      "\n\tATTACK:   " +
      this.attack +
      "\tSPEED:     " +
      this.speed;
    return data;
  }
}
