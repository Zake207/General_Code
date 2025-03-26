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
var _Discography_name, _Discography_discs;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discography = void 0;
/**
 * @description Class that represents a discography of a singer
 * @class Discography
 * @param {string} name - Name of the discography
 * @param {Disc[]} discs - Array of discs
 */
class Discography {
    /**
     * @description Creates an instance of Discography.
     * @param name String with the name of the discography
     * @param discs Array of Disc objects
     */
    constructor(name, ...discs) {
        _Discography_name.set(this, void 0);
        _Discography_discs.set(this, []);
        __classPrivateFieldSet(this, _Discography_name, name, "f");
        __classPrivateFieldSet(this, _Discography_discs, discs, "f");
    }
    /**
     * @description Getter of the name of the discography
     * @returns {string} Name of the discography
     */
    get name() {
        return __classPrivateFieldGet(this, _Discography_name, "f");
    }
    /**
     * @description Getter of the discs of the discography
     * @returns {Disc[]} Array of discs
     */
    get discs() {
        return __classPrivateFieldGet(this, _Discography_discs, "f");
    }
}
exports.Discography = Discography;
_Discography_name = new WeakMap(), _Discography_discs = new WeakMap();
