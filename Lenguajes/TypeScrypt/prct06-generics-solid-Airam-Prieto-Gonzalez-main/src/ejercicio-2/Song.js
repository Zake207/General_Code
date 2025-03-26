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
var _Song_name, _Song_duration, _Song_gender, _Song_single, _Song_reproductions;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
/**
 * @description Class Song represents a song with different attributes.
 * @class Song
 * @property {string} #name The name of the song.
 * @property {number} #duration The duration of the song in seconds.
 * @property {Gender} #gender The gender of the song.
 * @property {boolean} #single If the song is a single.
 * @property {number} #reproductions The number of reproductions of the song.
 */
class Song {
    /**
     * @description Creates an instance of Song.
     * @param name The name of the song.
     * @param duration Duration of the song in seconds.
     * @param gender Gender of the song.
     * @param single If the song is a single.
     * @param reproductions Number of reproductions of the song.
     */
    constructor(name, duration, gender, single, reproductions) {
        _Song_name.set(this, void 0);
        _Song_duration.set(this, void 0);
        _Song_gender.set(this, void 0);
        _Song_single.set(this, void 0);
        _Song_reproductions.set(this, void 0);
        __classPrivateFieldSet(this, _Song_name, name, "f");
        __classPrivateFieldSet(this, _Song_duration, duration, "f");
        __classPrivateFieldSet(this, _Song_gender, gender, "f");
        __classPrivateFieldSet(this, _Song_single, single, "f");
        __classPrivateFieldSet(this, _Song_reproductions, reproductions, "f");
    }
    /**
     * @description Getter for the name of the song.
     * @readonly
     * @type {string}
     * @memberof Song
     * @returns {string} The name of the song.
     */
    get name() {
        return __classPrivateFieldGet(this, _Song_name, "f");
    }
    /**
     * @description Getter for the duration of the song.
     * @readonly
     * @type {number}
     * @memberof Song
     * @returns {number} The duration of the song
     */
    get duration() {
        return __classPrivateFieldGet(this, _Song_duration, "f");
    }
    /**
     * @description Getter for the gender of the song.
     * @readonly
     * @type {Gender}
     * @memberof Song
     * @returns {Gender} The gender of the song.
     */
    get gender() {
        return __classPrivateFieldGet(this, _Song_gender, "f");
    }
    /**
     * @description Getter for the single attribute of the song.
     * @readonly
     * @type {boolean}
     * @memberof Song
     * @returns {boolean} If the song is a single.
     */
    get single() {
        return __classPrivateFieldGet(this, _Song_single, "f");
    }
    /**
     * @description Getter for the number of reproductions of the song.
     * @readonly
     * @type {number}
     * @memberof Song
     * @returns {number} The number of reproductions of the song.
     */
    get reproductions() {
        return __classPrivateFieldGet(this, _Song_reproductions, "f");
    }
}
exports.Song = Song;
_Song_name = new WeakMap(), _Song_duration = new WeakMap(), _Song_gender = new WeakMap(), _Song_single = new WeakMap(), _Song_reproductions = new WeakMap();
