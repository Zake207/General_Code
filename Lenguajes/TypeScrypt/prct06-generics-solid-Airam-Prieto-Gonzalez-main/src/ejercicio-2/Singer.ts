import { Discography } from "./Discography";
import { Disc } from "./Disc";
import { Single } from "./Single";

/**
 * @description Class that represents a singer.
 * @class Singer
 * @property {string} #name The name of the singer.
 * @property {number} #views Number of views of the singer.
 * @property {Discography} #discography Discography of the singer.
 */
export class Singer<T extends Single | Disc | (Single | Disc)> {
  #name: string;
  #views: number;
  #discography: Discography<T>;

  /**
   * @description Creates an instance of Singer.
   * @param {string} name The name of the singer.
   * @param {number} views Total views of the singer.
   * @param {Discography} discography Discography of the singer.
   * @memberof Singer
   * @constructor
   * @returns {Singer} An instance of Singer.
   */
  constructor(name: string, views: number, discography: Discography<T>) {
    this.#name = name;
    this.#views = views;
    this.#discography = discography;
  }

  /**
   * @description Getter of the name of the singer.
   * @readonly
   * @type {string}
   * @memberof Singer
   * @returns {string} El nombre del cantante.
   */
  get name() {
    return this.#name;
  }

  /**
   * @description Getter of the views of the singer.
   * @readonly
   * @type {number}
   * @memberof Singer
   * @returns {number} Las vistas del cantante.
   */
  get views() {
    return this.#views;
  }

  /**
   * @description Getter of the discography of the singer.
   * @readonly
   * @type {Discography}
   * @memberof Singer
   * @returns {Discography} The discography of the singer.
   */
  get discography() {
    return this.#discography;
  }

  /**
   * @description Method that prints the singer's information.
   * @memberof Singer
   * @returns {string} The singer's information.
   */
  PrintSinger(): string {
    let print: string = "\n/// " + this.name + " ///\n";
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
