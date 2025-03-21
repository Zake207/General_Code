/**
 * Interface Streamable, that describes the properties of a Streamable
 * @interface Streamable
 * @param {string} topic Topic of the Streamable
 * @param {T[]} StreamArray Array of Streams
 */
export interface Streamable<T> {
  readonly topic: string;
  StreamArray: T[];
}

/**
 * Interface BasicsStreamable, that describes the properties of a BasicsStreamable
 * @interface BasicsStreamable
 * @param {T[]} StreamArray Array of Streams
 */
export interface BasicsStreamable<T> extends Streamable<T> {
  AddStream(stream: T): void;
  ShowStreams(): string;
  GetStream(name: string): T | undefined;
}

/**
 * Interface SearchStreamable, that describes the properties of a SearchStreamable
 * @interface SearchStreamable
 */
export interface SearchStreamable<T> extends BasicsStreamable<T> {
  SearchByYear(year: number): string;
  SearchByName(name: string): string;
  SearchByDuration(duration: number): string;
  SearchByCreator(creator: string): string;
}
