"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentals = exports.Films = exports.Series = void 0;
/**
 * Class BasicStreamableCollection, that describes the properties of a BasicStreamableCollection
 * @class BasicStream
 * @implements SearchStreamable
 * @param {string} topic Topic of the BasicStreamableCollection
 * @param {T[]} StreamArray Array of Streams
 */
class BasicStreamableCollection {
    /**
     * Constructor of the BasicStreamableCollection class
     * @param topic Topic of the BasicStreamableCollection
     */
    constructor(topic) {
        this.StreamArray = [];
        this.topic = topic;
    }
    /**
     * Method to add a Stream to the StreamArray
     * @param stream Stream to add
     */
    AddStream(stream) {
        this.StreamArray.push(stream);
    }
    /**
     * Method to show the Streams in the StreamArray
     * @returns {string} result
     */
    ShowStreams() {
        let result = " STREAMS : ";
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
    GetStream(name) {
        let result = this.StreamArray[0];
        let found = false;
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
    SearchByYear(year) {
        let result = " STREAMS PUBLISHED IN " + year + " : ";
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
    SearchByName(name) {
        let result = " STREAMS WITH NAME " + name + ": ";
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
    SearchByDuration(duration) {
        let result = " STREAMS OF DURATION " + duration + ": ";
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
    SearchByCreator(creator) {
        let result = " STREAMS OF " + creator + ": ";
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
class Series extends BasicStreamableCollection {
    /**
     * Constructor of the Series class
     * @param topic Topic of the Series
     */
    constructor(topic) {
        super(topic);
    }
    /**
     * Method to search by seasons in the Series
     * @param seasons seasons of the Serie
     * @returns A list of Series that have the same seasons
     */
    SearchBySeasons(seasons) {
        let result = " STREAMS OF " + seasons + " SEASONS : ";
        this.StreamArray.forEach((item) => {
            if (item.seasons === seasons) {
                result += item.name + ", ";
            }
        });
        return result;
    }
}
exports.Series = Series;
/**
 * Class Films, that describes the properties of a Films
 * @class Films
 * @extends BasicStreamableCollection
 * @param {string} topic Topic of the Films
 * @param {T[]} StreamArray Array of Streams
 */
class Films extends BasicStreamableCollection {
    constructor(topic) {
        super(topic);
    }
    /**
     * Method to search by gender in the Films
     * @param gender gender of the Film
     * @returns A list of Films that have the same gender
     */
    SearchByGender(gender) {
        let result = " STREAMS OF " + gender + ": ";
        this.StreamArray.forEach((item) => {
            if (item.gender === gender) {
                result += item.name + ", ";
            }
        });
        return result;
    }
}
exports.Films = Films;
/**
 * Class Documentals, that describes the properties of a Documentals
 * @class Documentals
 * @extends BasicStreamableCollection
 * @param {string} topic Topic of the Documentals
 * @param {T[]} StreamArray Array of Streams
 */
class Documentals extends BasicStreamableCollection {
    constructor(topic) {
        super(topic);
    }
    /**
     * Method to search Documentals by Topic
     * @param topic topic of the Documental
     * @returns a list of Documentals that have the same topic
     */
    SearchByTopic(topic) {
        let result = " STREAMS OF " + topic + ": ";
        this.StreamArray.forEach((item) => {
            if (item.topic === topic) {
                result += item.name + ", ";
            }
        });
        return result;
    }
}
exports.Documentals = Documentals;
