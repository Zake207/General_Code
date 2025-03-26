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
var _Combat_rival_a, _Combat_rival_b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
const Pokemon_1 = require("./Pokemon");
/**
 * @class Combat
 * @description Class that simulates a combat between two pokemons.
 * @property {Pokemon} #rival_a - First rival.
 * @property {Pokemon} #rival_b - Second rival.
 * @method Start - Method that starts the combat.
 */
class Combat {
    /**
     * @constructor
     * @param {Pokemon} rival_a - First rival.
     * @param {Pokemon} rival_b - Second rival.
     */
    constructor(rival_a, rival_b) {
        _Combat_rival_a.set(this, void 0);
        _Combat_rival_b.set(this, void 0);
        __classPrivateFieldSet(this, _Combat_rival_a, rival_a, "f");
        __classPrivateFieldSet(this, _Combat_rival_b, rival_b, "f");
    }
    /**
     * @description Getter of the first rival.
     * @returns {Pokemon} - The first rival.
     * @readonly
     * @memberof Combat
     * @returns {Pokemon}
     */
    get rival_a() { return __classPrivateFieldGet(this, _Combat_rival_a, "f"); }
    /**
     * @description Getter of the second rival.
     * @returns {Pokemon} - The second rival.
     * @readonly
     * @memberof Combat
     * @returns {Pokemon}
     */
    get rival_b() { return __classPrivateFieldGet(this, _Combat_rival_b, "f"); }
    /**
     * @method Start
     * @description Method that starts the combat.
     * @returns {string} - The winner of the combat.
     */
    Start() {
        let winner = "";
        let rival_a_hp = __classPrivateFieldGet(this, _Combat_rival_a, "f").health;
        let rival_b_hp = __classPrivateFieldGet(this, _Combat_rival_b, "f").health;
        console.log("///     COMBATE     ///");
        console.log(__classPrivateFieldGet(this, _Combat_rival_a, "f").name + "  VS  " + __classPrivateFieldGet(this, _Combat_rival_b, "f").name);
        console.log(rival_a_hp +
            "/" +
            __classPrivateFieldGet(this, _Combat_rival_a, "f").health +
            "    |    " +
            rival_b_hp +
            "/" +
            __classPrivateFieldGet(this, _Combat_rival_b, "f").health);
        console.log("///////////////////////");
        let turn_counter = 1;
        let fighting = true;
        while (fighting) {
            console.log("\n/// TURNO " + turn_counter);
            if (turn_counter % 2 === 1) {
                let damage = Math.trunc(50 *
                    (__classPrivateFieldGet(this, _Combat_rival_a, "f").attack / __classPrivateFieldGet(this, _Combat_rival_b, "f").defense) *
                    Pokemon_1.Type_table[Pokemon_1.Type_number_code[__classPrivateFieldGet(this, _Combat_rival_a, "f").type]][Pokemon_1.Type_number_code[__classPrivateFieldGet(this, _Combat_rival_b, "f").type]]);
                console.log(__classPrivateFieldGet(this, _Combat_rival_a, "f").name + " attacks, inflicting " + damage + " damage.");
                rival_b_hp -= damage;
            }
            else {
                let damage = Math.trunc(50 *
                    (__classPrivateFieldGet(this, _Combat_rival_b, "f").attack / __classPrivateFieldGet(this, _Combat_rival_a, "f").defense) *
                    Pokemon_1.Type_table[Pokemon_1.Type_number_code[__classPrivateFieldGet(this, _Combat_rival_b, "f").type]][Pokemon_1.Type_number_code[__classPrivateFieldGet(this, _Combat_rival_a, "f").type]]);
                console.log(__classPrivateFieldGet(this, _Combat_rival_b, "f").name + " attacks, inflicting " + damage + " damage.");
                rival_a_hp -= damage;
            }
            console.log(rival_a_hp +
                "/" +
                __classPrivateFieldGet(this, _Combat_rival_a, "f").health +
                "    |    " +
                rival_b_hp +
                "/" +
                __classPrivateFieldGet(this, _Combat_rival_b, "f").health);
            if (rival_b_hp <= 0) {
                console.log(__classPrivateFieldGet(this, _Combat_rival_a, "f").name + " won!!!");
                winner = __classPrivateFieldGet(this, _Combat_rival_a, "f").name;
                fighting = false;
            }
            if (rival_a_hp <= 0) {
                console.log(__classPrivateFieldGet(this, _Combat_rival_b, "f").name + " won!!!");
                winner = __classPrivateFieldGet(this, _Combat_rival_b, "f").name;
                fighting = false;
            }
            ++turn_counter;
        }
        return winner;
    }
}
exports.Combat = Combat;
_Combat_rival_a = new WeakMap(), _Combat_rival_b = new WeakMap();
