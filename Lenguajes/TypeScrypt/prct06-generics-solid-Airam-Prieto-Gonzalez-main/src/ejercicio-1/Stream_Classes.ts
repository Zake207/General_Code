/**
 * Special type that describes the Topic of a Documental
 */
export type Topic = "Animals" | "History" | "Space";

/**
 * Special type that describes the gender of a Film
 */
export type Gender = "Terror" | "Drama" | "Adventure";

/**
 * Interface Stream, that describes the properties of a Stream
 * @interface Stream
 * @param {string} name Name of the Stream
 * @param {number} year Year of the Stream
 * @param {number} duration Duration of the Stream
 * @param {string} creator Creator of the Stream
 */
export abstract class Stream {
  public readonly name: string;
  public readonly year: number;
  public readonly duration: number;
  public readonly creator: string;

  /**
   * Constructor of the Stream class
   * @param name Name of the Stream
   * @param year Year of the Stream
   * @param duration Duration of the Stream
   * @param creator Creator of the Stream
   */
  constructor(name: string, year: number, duration: number, creator: string) {
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.creator = creator;
  }
}

/**
 * Class Serie, that describes the properties of a Serie
 * @class Serie
 * @extends Stream
 * @param {string} name Name of the Serie
 * @param {number} year Year of the Serie
 * @param {number} duration Duration of the Serie
 * @param {string} creator Creator of the Serie
 * @param {number} seasons Seasons of the Serie
 */
export class Serie extends Stream {
  public readonly seasons: number;
  constructor(
    name: string,
    year: number,
    duration: number,
    creator: string,
    seasons: number,
  ) {
    super(name, year, duration, creator);
    this.seasons = seasons;
  }
}

/**
 * Class Film, that describes the properties of a Film
 * @class Film
 * @extends Stream
 * @param {string} name Name of the Film
 * @param {number} year Year of the Film
 * @param {number} duration Duration of the Film
 * @param {string} creator Creator of the Film
 * @param {Gender} gender gender of the Film
 *
 */
export class Film extends Stream {
  public readonly gender: Gender;

  /**
   * Constructor of the Film class
   * @param name Name of the Film
   * @param year Year of the Film
   * @param duration Duration of the Film
   * @param creator Creator of the Film
   * @param gender Gender of the Film
   */
  constructor(
    name: string,
    year: number,
    duration: number,
    creator: string,
    gender: Gender,
  ) {
    super(name, year, duration, creator);
    this.gender = gender;
  }
}

/**
 * Class Documental, that describes the properties of a Documental
 * @class Documental
 * @extends Stream
 * @param {string} name Name of the Documental
 * @param {number} year Year of the Documental
 * @param {number} duration Duration of the Documental
 * @param {string} creator Creator of the Documental
 * @param {Topic} topic Topic of the Documental
 */
export class Documental extends Stream {
  public readonly topic: Topic;

  /**
   * Constructor of the Documental class
   * @param name Name of the Documental
   * @param year Year of the Documental
   * @param duration Duration of the Documental
   * @param creator Creator of the Documental
   * @param topic Topic of the Documental
   */
  constructor(
    name: string,
    year: number,
    duration: number,
    creator: string,
    topic: Topic,
  ) {
    super(name, year, duration, creator);
    this.topic = topic;
  }
}
