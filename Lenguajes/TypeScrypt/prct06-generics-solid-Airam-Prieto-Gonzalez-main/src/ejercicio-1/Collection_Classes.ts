import { SearchStreamable } from "./interfaces";
import {
  Stream,
  Serie,
  Film,
  Documental,
  Gender,
  Topic,
} from "./Stream_Classes";

/**
 * Class BasicStreamableCollection, that describes the properties of a BasicStreamableCollection
 * @class BasicStream
 * @implements SearchStreamable
 * @param {string} topic Topic of the BasicStreamableCollection
 * @param {T[]} StreamArray Array of Streams
 */
abstract class BasicStreamableCollection<T extends Stream>
  implements SearchStreamable<T>
{
  public readonly topic: string;
  StreamArray: T[] = [];

  /**
   * Constructor of the BasicStreamableCollection class
   * @param topic Topic of the BasicStreamableCollection
   */
  constructor(topic: string) {
    this.topic = topic;
  }

  /**
   * Method to add a Stream to the StreamArray
   * @param stream Stream to add
   */
  AddStream(stream: T): void {
    this.StreamArray.push(stream);
  }

  /**
   * Method to show the Streams in the StreamArray
   * @returns {string} result
   */
  ShowStreams(): string {
    let result: string = " STREAMS : ";
    this.StreamArray.forEach((item) => {
      result += item.name + ", ";
    });
    return result;
  }

  /**
   * Method to get a Stream from the StreamArray
   * @param name Name of the Stream
   * @returns {T} result
   */
  GetStream(name: string): T | undefined {
    let result: T = this.StreamArray[0];
    let found: boolean = false;
    this.StreamArray.forEach((item) => {
      if (item.name === name) {
        result = item;
        found = true;
      }
    });
    if (found) {
      return result;
    }
    return undefined;
  }

  /**
   * Method to search Streams by year
   * @param year year of the Stream
   * @returns string result
   */
  SearchByYear(year: number): string {
    let result: string = " STREAMS PUBLISHED IN " + year + " : ";
    this.StreamArray.forEach((item) => {
      if (item.year === year) {
        result += item.name + ", ";
      }
    });
    return result;
  }

  /**
   * Method to search Streams by name
   * @param name name of the Stream
   * @returns string result
   */
  SearchByName(name: string): string {
    let result: string = " STREAMS WITH NAME " + name + ": ";
    this.StreamArray.forEach((item) => {
      if (item.name === name) {
        result += item.name + ", ";
      }
    });
    return result;
  }

  /**
   * Method to search Streams by duration
   * @param duration duration of the Stream
   * @returns string result
   */
  SearchByDuration(duration: number): string {
    let result: string = " STREAMS OF DURATION " + duration + ": ";
    this.StreamArray.forEach((item) => {
      if (item.duration === duration) {
        result += item.name + ", ";
      }
    });
    return result;
  }

  /**
   * Method to search Streams by creator
   * @param creator creator of the Stream
   * @returns a list of Streams that have the same creator
   */
  SearchByCreator(creator: string): string {
    let result: string = " STREAMS OF " + creator + ": ";
    this.StreamArray.forEach((item) => {
      if (item.creator === creator) {
        result += item.name + ", ";
      }
    });
    return result;
  }
}

/**
 * Class Series, that describes the properties of a Series
 * @class Series
 * @extends BasicStreamableCollection
 * @param {string} topic Topic of the Series
 * @param {T[]} StreamArray Array of Streams
 */
export class Series<T extends Serie> extends BasicStreamableCollection<T> {
  /**
   * Constructor of the Series class
   * @param topic Topic of the Series
   */
  constructor(topic: string) {
    super(topic);
  }

  /**
   * Method to search by seasons in the Series
   * @param seasons seasons of the Serie
   * @returns A list of Series that have the same seasons
   */
  SearchBySeasons(seasons: number): string {
    let result: string = " STREAMS OF " + seasons + " SEASONS : ";
    this.StreamArray.forEach((item) => {
      if (item.seasons === seasons) {
        result += item.name + ", ";
      }
    });
    return result;
  }
}

/**
 * Class Films, that describes the properties of a Films
 * @class Films
 * @extends BasicStreamableCollection
 * @param {string} topic Topic of the Films
 * @param {T[]} StreamArray Array of Streams
 */
export class Films<T extends Film> extends BasicStreamableCollection<T> {
  constructor(topic: string) {
    super(topic);
  }

  /**
   * Method to search by gender in the Films
   * @param gender gender of the Film
   * @returns A list of Films that have the same gender
   */
  SearchByGender(gender: Gender): string {
    let result: string = " STREAMS OF " + gender + ": ";
    this.StreamArray.forEach((item) => {
      if (item.gender === gender) {
        result += item.name + ", ";
      }
    });
    return result;
  }
}

/**
 * Class Documentals, that describes the properties of a Documentals
 * @class Documentals
 * @extends BasicStreamableCollection
 * @param {string} topic Topic of the Documentals
 * @param {T[]} StreamArray Array of Streams
 */
export class Documentals<
  T extends Documental,
> extends BasicStreamableCollection<T> {
  constructor(topic: string) {
    super(topic);
  }

  /**
   * Method to search Documentals by Topic
   * @param topic topic of the Documental
   * @returns a list of Documentals that have the same topic
   */
  SearchByTopic(topic: Topic): string {
    let result: string = " STREAMS OF " + topic + ": ";
    this.StreamArray.forEach((item) => {
      if (item.topic === topic) {
        result += item.name + ", ";
      }
    });
    return result;
  }
}
