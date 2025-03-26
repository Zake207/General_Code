"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScore = exports.CalcultePoints = void 0;
/**
 * Function to calculate the points of a word
 * @param word The word to calculate the points
 * @returns The amount of points of the word
 *
 * ```typescript
 * CalcultePoints("kilo"); // return undefined
 * CalcultePoints("almendras"); // return 11
 * CalcultePoints("llano"); // return 5
 * CalcultePoints("wenceslao"); // return undefined
 * CalcultePoints("ratón"); // return 5
 * ```
 *
 */
function CalcultePoints(word) {
    word = word.toUpperCase();
    if (word.includes("K") || word.includes("W")) {
        return undefined;
    }
    word = word.replaceAll(/Á|É|Í|Ó|Ú/gi, "A");
    let points = 0;
    for (let i = 0; i < word.length; ++i) {
        switch (word[i]) {
            case "A":
                points += 1;
                break;
            case "E":
                points += 1;
                break;
            case "I":
                points += 1;
                break;
            case "O":
                points += 1;
                break;
            case "U":
                points += 1;
                break;
            case "L":
                points += 1;
                if (word[i + 1] === "L") {
                    points += 7;
                    ++i;
                }
                break;
            case "N":
                points += 1;
                break;
            case "R":
                points += 1;
                if (word[i + 1] === "R") {
                    points += 7;
                    ++i;
                }
                break;
            case "S":
                points += 1;
                break;
            case "T":
                points += 1;
                break;
            case "D":
                points += 2;
                break;
            case "G":
                points += 2;
                break;
            case "B":
                points += 3;
                break;
            case "C":
                points += 3;
                if (word[i + 1] === "H") {
                    points += 2;
                    ++i;
                }
                break;
            case "M":
                points += 3;
                break;
            case "P":
                points += 3;
                break;
            case "F":
                points += 4;
                break;
            case "H":
                points += 4;
                break;
            case "V":
                points += 4;
                break;
            case "Y":
                points += 4;
                break;
            case "J":
                points += 8;
                break;
            case "Ñ":
                points += 8;
                break;
            case "X":
                points += 8;
                break;
            case "Q":
                points += 5;
                break;
            case "Z":
                points += 10;
                break;
            default:
                break;
        }
    }
    return points;
}
exports.CalcultePoints = CalcultePoints;
/**
 * Function to calculate the points of a list of words
 * @param word_list The list of words to calculate the points
 * @returns A number list that cointains the points of each word of the list passed via parameter
 *
 * ```typescript
 * GetScore(["kilo", "almendras", "llano", "wenceslao", "ratón"]); // return [undefined, 11, 5, undefined, 5]
 * GetScore([]); // return []
 * ```
 *
 */
function GetScore(word_list) {
    let points = [];
    word_list.forEach((word) => {
        points.push(CalcultePoints(word));
    });
    return points;
}
exports.GetScore = GetScore;
console.log(GetScore(["kilo", "almendras", "llano", "wenceslao", "ratón"]));
console.log(GetScore([]));
