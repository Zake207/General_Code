"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Pokedex_register;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
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
class Pokedex {
    // Functions
    /**
     * @description This function is used to create a Pokedex.
     * @param pokemons Pokemons to register in the Pokedex.
     */
    constructor(...pokemons) {
        // Atributes
        _Pokedex_register.set(this, []);
        if (pokemons.length === 0) {
            console.log("Pokedex initialized...");
        }
        else {
            console.log("Pokedex initialized with " + pokemons.length + " species!!");
            __classPrivateFieldSet(this, _Pokedex_register, pokemons, "f");
        }
    }
    /**
     * @description This function is used to get the register of the Pokedex.
     * @returns Register of the Pokedex.
     */
    get register() {
        return __classPrivateFieldGet(this, _Pokedex_register, "f");
    }
    /**
     * @description This function is used to print the register of the Pokedex.
     * @returns void
     */
    PrintRegister() {
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            console.log("#" + (index + 1) + "  ======================================");
            console.log(pokemon.Data());
        });
    }
    /**
     * @description This function is used to search pokemons by type.
     * @param type Type of the Pokemon.
     * @returns Pokemon[] Pokemons with the type.
     */
    SearchByType(type) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.type === type) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchByName(name) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.name.toLowerCase() === name.toLowerCase()) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchBySize(size) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.size === size) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchByWeight(weight) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.weight === weight) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchByAttack(attack) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.attack === attack) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchByDefense(defense) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.defense === defense) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchBySpeed(speed) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.speed === speed) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    SearchByHealth(health) {
        let result = [];
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((pokemon, index) => {
            if (pokemon.health === health) {
                result.push(pokemon);
                console.log("#" + (index + 1) + "  ======================================");
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
    Include(pokemon) {
        let pokemon_included = false;
        __classPrivateFieldGet(this, _Pokedex_register, "f").forEach((specie) => {
            if (pokemon === specie) {
                pokemon_included = true;
            }
        });
        return pokemon_included;
    }
}
exports.Pokedex = Pokedex;
_Pokedex_register = new WeakMap();
