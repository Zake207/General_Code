"use strict";
/**
 * @file Pokemon.ts
 * @version 1.0
 * @description This file contains the class Pokemon and the type Type.
 *
 */
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
var _Pokemon_name, _Pokemon_weight, _Pokemon_size, _Pokemon_type, _Pokemon_stats;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.Type_table = exports.Type_number_code = void 0;
/**
 * @type Type_number_code
 * @description This type is used to assign a number to each type.
 * @values 0 | 1 | 2 | 3
 */
var Type_number_code;
(function (Type_number_code) {
    Type_number_code[Type_number_code["Fire"] = 0] = "Fire";
    Type_number_code[Type_number_code["Water"] = 1] = "Water";
    Type_number_code[Type_number_code["Grass"] = 2] = "Grass";
    Type_number_code[Type_number_code["Electric"] = 3] = "Electric";
})(Type_number_code = exports.Type_number_code || (exports.Type_number_code = {}));
/**
 * @type Type_table
 * @description This matrix is used to define the type table.
 */
exports.Type_table = [
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
class Pokemon {
    // Functions
    /**
     * @description This function is used to create a Pokemon.
     * @param name Name of the Pokemon.
     * @param weight Weight of the Pokemon in kg.
     * @param size Size of the Pokemon in meters.
     * @param type Type of the Pokemon.
     * @param stats Stats of the Pokemon: [attack, defense, speed, health].
     */
    constructor(name, weight, size, type, stats) {
        // Atributes
        _Pokemon_name.set(this, void 0);
        _Pokemon_weight.set(this, void 0);
        _Pokemon_size.set(this, void 0);
        _Pokemon_type.set(this, void 0);
        _Pokemon_stats.set(this, void 0);
        __classPrivateFieldSet(this, _Pokemon_name, name, "f");
        __classPrivateFieldSet(this, _Pokemon_weight, weight, "f");
        __classPrivateFieldSet(this, _Pokemon_size, size, "f");
        __classPrivateFieldSet(this, _Pokemon_type, type, "f");
        __classPrivateFieldSet(this, _Pokemon_stats, stats, "f");
    }
    /**
     * @description This function is used to get the name of the Pokemon.
     * @returns Name of the Pokemon.
     */
    get name() {
        return __classPrivateFieldGet(this, _Pokemon_name, "f");
    }
    /**
     * @description This function is used to get the weight of the Pokemon.
     * @returns Weight of the Pokemon in kg.
     */
    get weight() {
        return __classPrivateFieldGet(this, _Pokemon_weight, "f");
    }
    /**
     * @description This function is used to get the size of the Pokemon.
     * @returns Size of the Pokemon in meters.
     */
    get size() {
        return __classPrivateFieldGet(this, _Pokemon_size, "f");
    }
    /**
     * @description This function is used to get the type of the Pokemon.
     * @returns Type of the Pokemon.
     */
    get type() {
        return __classPrivateFieldGet(this, _Pokemon_type, "f");
    }
    /**
     * @description This function is used to get the attack of the Pokemon.
     * @returns Attack of the Pokemon.
     */
    get attack() {
        return __classPrivateFieldGet(this, _Pokemon_stats, "f")[0];
    }
    /**
     * @description This function is used to get the defense of the Pokemon.
     * @returns Defense of the Pokemon.
     */
    get defense() {
        return __classPrivateFieldGet(this, _Pokemon_stats, "f")[1];
    }
    /**
     * @description This function is used to get the speed of the Pokemon.
     * @returns Speed of the Pokemon.
     */
    get speed() {
        return __classPrivateFieldGet(this, _Pokemon_stats, "f")[2];
    }
    /**
     * @description This function is used to get the health of the Pokemon.
     * @returns Health of the Pokemon.
     */
    get health() {
        return __classPrivateFieldGet(this, _Pokemon_stats, "f")[3];
    }
    /**
     * @description This function is used to get the data of the Pokemon.
     * @returns Data of the Pokemon.
     */
    Data() {
        let data = "";
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
exports.Pokemon = Pokemon;
_Pokemon_name = new WeakMap(), _Pokemon_weight = new WeakMap(), _Pokemon_size = new WeakMap(), _Pokemon_type = new WeakMap(), _Pokemon_stats = new WeakMap();
