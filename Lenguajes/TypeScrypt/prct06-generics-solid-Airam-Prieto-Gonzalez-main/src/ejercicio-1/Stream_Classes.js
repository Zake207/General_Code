"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documental = exports.Film = exports.Serie = exports.Stream = void 0;
/**
 * Interface Stream, that describes the properties of a Stream
 * @interface Stream
 * @param {string} name Name of the Stream
 * @param {number} year Year of the Stream
 * @param {number} duration Duration of the Stream
 * @param {string} creator Creator of the Stream
 */
class Stream {
    /**
     * Constructor of the Stream class
     * @param name Name of the Stream
     * @param year Year of the Stream
     * @param duration Duration of the Stream
     * @param creator Creator of the Stream
     */
    constructor(name, year, duration, creator) {
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.creator = creator;
    }
}
exports.Stream = Stream;
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
class Serie extends Stream {
    constructor(name, year, duration, creator, seasons) {
        super(name, year, duration, creator);
        this.seasons = seasons;
    }
}
exports.Serie = Serie;
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
class Film extends Stream {
    /**
     * Constructor of the Film class
     * @param name Name of the Film
     * @param year Year of the Film
     * @param duration Duration of the Film
     * @param creator Creator of the Film
     * @param gender Gender of the Film
     */
    constructor(name, year, duration, creator, gender) {
        super(name, year, duration, creator);
        this.gender = gender;
    }
}
exports.Film = Film;
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
class Documental extends Stream {
    /**
     * Constructor of the Documental class
     * @param name Name of the Documental
     * @param year Year of the Documental
     * @param duration Duration of the Documental
     * @param creator Creator of the Documental
     * @param topic Topic of the Documental
     */
    constructor(name, year, duration, creator, topic) {
        super(name, year, duration, creator);
        this.topic = topic;
    }
}
exports.Documental = Documental;
