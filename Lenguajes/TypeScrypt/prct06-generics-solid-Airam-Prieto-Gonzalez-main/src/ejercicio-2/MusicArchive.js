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
var _MusicArchive_artists;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicArchive = void 0;
/**
 * @description Class that represents a music archive.
 * @class MusicArchive
 * @property {Singer[]} #artists Array of singers.
 */
class MusicArchive {
    /**
     * @description Creates an instance of MusicArchive.
     * @param {...Singer} artists Array of singers.
     * @constructor
     * @returns {MusicArchive} An instance of MusicArchive.
     */
    constructor(...artists) {
        _MusicArchive_artists.set(this, void 0);
        __classPrivateFieldSet(this, _MusicArchive_artists, artists, "f");
    }
    /**
     * @description Getter of the singers.
     * @readonly
     * @type {Singer[]}
     */
    Print() {
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            let albums = "";
            singer.discography.discs.forEach((disc) => {
                albums += "   -" + disc.name;
            });
            console.table([[singer.name, singer.views, albums]]);
        });
    }
    /**
     * @description Search for a singer.
     * @param {string} searching_artist The name of the singer to search.
     * @returns {[[string, number, string]] | undefined} The singer found.
     */
    SearchSinger(searching_artist) {
        let result = undefined;
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            if (singer.name === searching_artist) {
                let albums = "";
                singer.discography.discs.forEach((disc) => {
                    albums += "   -" + disc.name;
                });
                result = [[singer.name, singer.views, albums]];
                console.table(result);
            }
        });
        return result;
    }
    /**
     * Search for a disc.
     * @param {string} searching_disc The name of the disc to search.
     * @returns {[[string, string, number, string]] | undefined} The disc found.
     */
    SearchDisc(searching_disc) {
        let result = undefined;
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            singer.discography.discs.forEach((disc) => {
                if (disc.name === searching_disc) {
                    let songs = "";
                    disc.songs.forEach((song) => {
                        songs += "   -" + song.name;
                    });
                    result = [[disc.name, singer.name, disc.publication, songs]];
                    console.table(result);
                }
            });
        });
        return result;
    }
    /**
     * @description Search for a song.
     * @param {string} searching_song The name of the song to search.
     * @returns {[[string, string, Gender, number, number]] | undefined} The song found.
     */
    SearchSong(searching_song) {
        let result = undefined;
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            singer.discography.discs.forEach((disc) => {
                disc.songs.forEach((song) => {
                    if (searching_song === song.name) {
                        result = [
                            [
                                song.name,
                                singer.name,
                                song.gender,
                                song.duration,
                                song.reproductions,
                            ],
                        ];
                        console.table(result);
                    }
                });
            });
        });
        return result;
    }
    /**
     * @description Total views of a disc.
     * @param searching_disc The name of the disc to search.
     * @returns Number of views of the disc.
     */
    TotalViews(searching_disc) {
        let result = 0;
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            singer.discography.discs.forEach((disc) => {
                if (disc.name === searching_disc) {
                    result = disc.TotalViews();
                }
            });
        });
        return result;
    }
    /**
     * @description Total duration of a disc.
     * @param searching_disc The name of the disc to search.
     * @returns Number of views of the disc.
     */
    TotalDuration(searching_disc) {
        let result = 0;
        __classPrivateFieldGet(this, _MusicArchive_artists, "f").forEach((singer) => {
            singer.discography.discs.forEach((disc) => {
                if (disc.name === searching_disc) {
                    result = disc.TotalDuration();
                }
            });
        });
        return result;
    }
}
exports.MusicArchive = MusicArchive;
_MusicArchive_artists = new WeakMap();
