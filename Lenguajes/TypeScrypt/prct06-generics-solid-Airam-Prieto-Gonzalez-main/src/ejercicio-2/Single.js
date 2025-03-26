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
var _Single_name, _Single_publcation, _Single_songs;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Single = void 0;
/**
 * @description Class that represents a disc.
 * @class Single
 */
class Single {
    /**
     * Creates an instance of Disc.
     * @param name The name of the disc.
     * @param publication The publication year of the disc.
     * @param songs The songs of the disc.
     */
    constructor(name, publication, ...songs) {
        _Single_name.set(this, void 0);
        _Single_publcation.set(this, void 0);
        _Single_songs.set(this, []);
        __classPrivateFieldSet(this, _Single_name, name, "f");
        __classPrivateFieldSet(this, _Single_publcation, publication, "f");
        __classPrivateFieldSet(this, _Single_songs, songs, "f");
    }
    /**
     * @description Getter for the name of the disc.
     * @type {string}
     * @returns {string} The name of the disc.
     */
    get name() {
        return __classPrivateFieldGet(this, _Single_name, "f");
    }
    /**
     * @description Getter for the publication year of the disc.
     * @type {number}
     * @returns {number} The publication year of the disc.
     */
    get publication() {
        return __classPrivateFieldGet(this, _Single_publcation, "f");
    }
    /**
     * @description Getter for the songs of the disc.
     * @readonly
     * @type {Song[]}
     * @memberof Disc
     * @returns {Song[]} The songs of the disc.
     */
    get songs() {
        return __classPrivateFieldGet(this, _Single_songs, "f");
    }
    /**
     * @description Function that calculates the total number of reproductions of the disc.
     * @returns {number} The total number of reproductions of the disc.
     */
    TotalViews() {
        let views = 0;
        __classPrivateFieldGet(this, _Single_songs, "f").forEach((song) => {
            views += song.reproductions;
        });
        return views;
    }
    /**
     * @description Function that calculates the total duration of the disc.
     * @returns {number} The total duration of the disc.
     */
    TotalDuration() {
        let duration = 0;
        __classPrivateFieldGet(this, _Single_songs, "f").forEach((song) => {
            duration += song.duration;
        });
        return duration;
    }
}
exports.Single = Single;
_Single_name = new WeakMap(), _Single_publcation = new WeakMap(), _Single_songs = new WeakMap();
