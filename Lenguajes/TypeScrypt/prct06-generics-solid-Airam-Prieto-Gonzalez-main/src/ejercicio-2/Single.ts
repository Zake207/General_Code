import { Song } from "./Song";

/**
 * @description Class that represents a disc.
 * @class Single
 */
export class Single {
  #name: string;
  #publcation: number;
  #songs: Song[] = [];

  /**
   * Creates an instance of Disc.
   * @param name The name of the disc.
   * @param publication The publication year of the disc.
   * @param songs The songs of the disc.
   */
  constructor(name: string, publication: number, ...songs: Song[]) {
    this.#name = name;
    this.#publcation = publication;
    this.#songs = songs;
  }

  /**
   * @description Getter for the name of the disc.
   * @type {string}
   * @returns {string} The name of the disc.
   */
  get name() {
    return this.#name;
  }

  /**
   * @description Getter for the publication year of the disc.
   * @type {number}
   * @returns {number} The publication year of the disc.
   */
  get publication() {
    return this.#publcation;
  }

  /**
   * @description Getter for the songs of the disc.
   * @readonly
   * @type {Song[]}
   * @memberof Disc
   * @returns {Song[]} The songs of the disc.
   */
  get songs() {
    return this.#songs;
  }

  /**
   * @description Function that calculates the total number of reproductions of the disc.
   * @returns {number} The total number of reproductions of the disc.
   */
  TotalViews(): number {
    let views: number = 0;
    this.#songs.forEach((song) => {
      views += song.reproductions;
    });
    return views;
  }

  /**
   * @description Function that calculates the total duration of the disc.
   * @returns {number} The total duration of the disc.
   */
  TotalDuration(): number {
    let duration: number = 0;
    this.#songs.forEach((song) => {
      duration += song.duration;
    });
    return duration;
  }
}
