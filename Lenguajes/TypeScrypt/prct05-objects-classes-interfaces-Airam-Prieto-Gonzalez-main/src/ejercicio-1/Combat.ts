import { Type_number_code, Type_table, Pokemon } from "./Pokemon"

/**
 * @class Combat
 * @description Class that simulates a combat between two pokemons.
 * @property {Pokemon} #rival_a - First rival.
 * @property {Pokemon} #rival_b - Second rival.
 * @method Start - Method that starts the combat.
 */
export class Combat {
  #rival_a: Pokemon
  #rival_b: Pokemon

  /**
   * @constructor
   * @param {Pokemon} rival_a - First rival.
   * @param {Pokemon} rival_b - Second rival.
   */
  constructor(rival_a: Pokemon, rival_b: Pokemon) {
    this.#rival_a = rival_a
    this.#rival_b = rival_b
  }

  /**
   * @description Getter of the first rival.
   * @returns {Pokemon} - The first rival.
   * @readonly
   * @memberof Combat
   * @returns {Pokemon}
   */
  get rival_a(): Pokemon { return this.#rival_a }

  /**
   * @description Getter of the second rival.
   * @returns {Pokemon} - The second rival.
   * @readonly
   * @memberof Combat
   * @returns {Pokemon}
   */
  get rival_b(): Pokemon { return this.#rival_b }

  /**
   * @method Start
   * @description Method that starts the combat.
   * @returns {string} - The winner of the combat.
   */
  Start(): string {
    let winner: string = ""
    let rival_a_hp = this.#rival_a.health
    let rival_b_hp = this.#rival_b.health
    console.log("///     COMBATE     ///")
    console.log(this.#rival_a.name + "  VS  " + this.#rival_b.name)
    console.log(
      rival_a_hp +
        "/" +
        this.#rival_a.health +
        "    |    " +
        rival_b_hp +
        "/" +
        this.#rival_b.health,
    )
    console.log("///////////////////////")
    let turn_counter: number = 1
    let fighting = true
    while (fighting) {
      console.log("\n/// TURNO " + turn_counter)
      if (turn_counter % 2 === 1) {
        let damage: number = Math.trunc(
          50 *
            (this.#rival_a.attack / this.#rival_b.defense) *
            Type_table[Type_number_code[this.#rival_a.type]][
              Type_number_code[this.#rival_b.type]
            ],
        )
        console.log(
          this.#rival_a.name + " attacks, inflicting " + damage + " damage.",
        )
        rival_b_hp -= damage
      } else {
        let damage: number = Math.trunc(
          50 *
            (this.#rival_b.attack / this.#rival_a.defense) *
            Type_table[Type_number_code[this.#rival_b.type]][
              Type_number_code[this.#rival_a.type]
            ],
        )
        console.log(
          this.#rival_b.name + " attacks, inflicting " + damage + " damage.",
        )
        rival_a_hp -= damage
      }
      console.log(
        rival_a_hp +
          "/" +
          this.#rival_a.health +
          "    |    " +
          rival_b_hp +
          "/" +
          this.#rival_b.health,
      )
      if (rival_b_hp <= 0) {
        console.log(this.#rival_a.name + " won!!!")
        winner = this.#rival_a.name
        fighting = false
      }
      if (rival_a_hp <= 0) {
        console.log(this.#rival_b.name + " won!!!")
        winner = this.#rival_b.name
        fighting = false
      }
      ++turn_counter
    }
    return winner
  }
}
