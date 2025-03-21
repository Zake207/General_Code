import { Gender } from "./Song";
import { Singer } from "./Singer";
import { Single } from "./Single";
import { Disc } from "./Disc";

/**
 * @description Class that represents a music archive.
 * @class MusicArchive
 * @property {Singer[]} #artists Array of singers.
 */
export class MusicArchive<T extends Single | Disc | (Single | Disc)> {
  #artists: Singer<T>[];

  /**
   * @description Creates an instance of MusicArchive.
   * @param {...Singer} artists Array of singers.
   * @constructor
   * @returns {MusicArchive} An instance of MusicArchive.
   */
  constructor(...artists: Singer<T>[]) {
    this.#artists = artists;
  }

  /**
   * @description Getter of the singers.
   * @readonly
   * @type {Singer[]}
   */
  Print(): void {
    this.#artists.forEach((singer) => {
      let albums: string = "";
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
  SearchSinger(
    searching_artist: string,
  ): [[string, number, string]] | undefined {
    let result: [[string, number, string]] | undefined = undefined;
    this.#artists.forEach((singer) => {
      if (singer.name === searching_artist) {
        let albums: string = "";
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
  SearchDisc(
    searching_disc: string,
  ): [[string, string, number, string]] | undefined {
    let result: [[string, string, number, string]] | undefined = undefined;
    this.#artists.forEach((singer) => {
      singer.discography.discs.forEach((disc) => {
        if (disc.name === searching_disc) {
          let songs: string = "";
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
  SearchSong(
    searching_song: string,
  ): [[string, string, Gender, number, number]] | undefined {
    let result: [[string, string, Gender, number, number]] | undefined =
      undefined;
    this.#artists.forEach((singer) => {
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
  TotalViews(searching_disc: string): number {
    let result: number = 0;
    this.#artists.forEach((singer) => {
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
  TotalDuration(searching_disc: string): number {
    let result: number = 0;
    this.#artists.forEach((singer) => {
      singer.discography.discs.forEach((disc) => {
        if (disc.name === searching_disc) {
          result = disc.TotalDuration();
        }
      });
    });
    return result;
  }
}
