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
var _Singer_name, _Singer_views, _Singer_discography;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singer = void 0;
/**
 * @description Class that represents a singer.
 * @class Singer
 * @property {string} #name The name of the singer.
 * @property {number} #views Number of views of the singer.
 * @property {Discography} #discography Discography of the singer.
 */
class Singer {
    /**
     * @description Creates an instance of Singer.
     * @param {string} name The name of the singer.
     * @param {number} views Total views of the singer.
     * @param {Discography} discography Discography of the singer.
     * @memberof Singer
     * @constructor
     * @returns {Singer} An instance of Singer.
     */
    constructor(name, views, discography) {
        _Singer_name.set(this, void 0);
        _Singer_views.set(this, void 0);
        _Singer_discography.set(this, void 0);
        __classPrivateFieldSet(this, _Singer_name, name, "f");
        __classPrivateFieldSet(this, _Singer_views, views, "f");
        __classPrivateFieldSet(this, _Singer_discography, discography, "f");
    }
    /**
     * @description Getter of the name of the singer.
     * @readonly
     * @type {string}
     * @memberof Singer
     * @returns {string} El nombre del cantante.
     */
    get name() {
        return __classPrivateFieldGet(this, _Singer_name, "f");
    }
    /**
     * @description Getter of the views of the singer.
     * @readonly
     * @type {number}
     * @memberof Singer
     * @returns {number} Las vistas del cantante.
     */
    get views() {
        return __classPrivateFieldGet(this, _Singer_views, "f");
    }
    /**
     * @description Getter of the discography of the singer.
     * @readonly
     * @type {Discography}
     * @memberof Singer
     * @returns {Discography} The discography of the singer.
     */
    get discography() {
        return __classPrivateFieldGet(this, _Singer_discography, "f");
    }
    /**
     * @description Method that prints the singer's information.
     * @memberof Singer
     * @returns {string} The singer's information.
     */
    PrintSinger() {
        let print = "\n/// " + this.name + " ///\n";
        print += "   # Views: " + this.views + ".\n   # Discography:";
        this.discography.discs.forEach((disc) => {
            print +=
                "\n\t + " +
                    disc.name +
                    "\n\t    - Published: " +
                    disc.publication +
                    ".\n";
            disc.songs.forEach((song) => {
                print += "\t\t" + song.name + "\n";
                print += "\t\t   Duration: " + song.duration + "s.\n";
                print += "\t\t   Gender: " + song.gender + ".\n";
                print += "\t\t   Single: " + song.single + ".\n";
                print += "\t\t   Reproductions: " + song.reproductions + ".\n\n";
            });
        });
        return print;
    }
}
exports.Singer = Singer;
_Singer_name = new WeakMap(), _Singer_views = new WeakMap(), _Singer_discography = new WeakMap();
