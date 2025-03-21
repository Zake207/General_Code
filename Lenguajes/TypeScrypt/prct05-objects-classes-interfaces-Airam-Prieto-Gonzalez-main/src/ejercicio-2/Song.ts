/**
 * @alias Gender is a string that can be "Rock", "Pop", "Techno", "Jazz", "Opera" or "Urban".
 */
export type Gender = "Rock" | "Pop" | "Techno" | "Jazz" | "Opera" | "Urban";

/**
 * @description Class Song represents a song with different attributes.
 * @class Song
 * @property {string} #name The name of the song.
 * @property {number} #duration The duration of the song in seconds.
 * @property {Gender} #gender The gender of the song.
 * @property {boolean} #single If the song is a single.
 * @property {number} #reproductions The number of reproductions of the song.
 */
export class Song {
  #name: string;
  #duration: number;
  #gender: Gender;
  #single: boolean;
  #reproductions: number;

  /**
   * @description Creates an instance of Song.
   * @param name The name of the song.
   * @param duration Duration of the song in seconds.
   * @param gender Gender of the song.
   * @param single If the song is a single.
   * @param reproductions Number of reproductions of the song.
   */
  constructor(
    name: string,
    duration: number,
    gender: Gender,
    single: boolean,
    reproductions: number,
  ) {
    this.#name = name;
    this.#duration = duration;
    this.#gender = gender;
    this.#single = single;
    this.#reproductions = reproductions;
  }

  /**
   * @description Getter for the name of the song.
   * @readonly
   * @type {string}
   * @memberof Song
   * @returns {string} The name of the song.
   */
  get name() {
    return this.#name;
  }

  /**
   * @description Getter for the duration of the song.
   * @readonly
   * @type {number}
   * @memberof Song
   * @returns {number} The duration of the song
   */
  get duration() {
    return this.#duration;
  }

  /**
   * @description Getter for the gender of the song.
   * @readonly
   * @type {Gender}
   * @memberof Song
   * @returns {Gender} The gender of the song.
   */
  get gender() {
    return this.#gender;
  }

  /**
   * @description Getter for the single attribute of the song.
   * @readonly
   * @type {boolean}
   * @memberof Song
   * @returns {boolean} If the song is a single.
   */
  get single() {
    return this.#single;
  }

  /**
   * @description Getter for the number of reproductions of the song.
   * @readonly
   * @type {number}
   * @memberof Song
   * @returns {number} The number of reproductions of the song.
   */
  get reproductions() {
    return this.#reproductions;
  }
}
