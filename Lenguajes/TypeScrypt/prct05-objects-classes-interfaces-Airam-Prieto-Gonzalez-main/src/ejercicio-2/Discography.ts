import { Disc } from "./Disc";

/**
 * @description Class that represents a discography of a singer
 * @class Discography
 * @param {string} name - Name of the discography
 * @param {Disc[]} discs - Array of discs
 */
export class Discography {
  #name: string;
  #discs: Disc[] = [];

  /**
   * @description Creates an instance of Discography.
   * @param name String with the name of the discography
   * @param discs Array of Disc objects
   */
  constructor(name: string, ...discs: Disc[]) {
    this.#name = name;
    this.#discs = discs;
  }

  /**
   * @description Getter of the name of the discography
   * @returns {string} Name of the discography
   */
  get name() {
    return this.#name;
  }

  /**
   * @description Getter of the discs of the discography
   * @returns {Disc[]} Array of discs
   */
  get discs() {
    return this.#discs;
  }
}
