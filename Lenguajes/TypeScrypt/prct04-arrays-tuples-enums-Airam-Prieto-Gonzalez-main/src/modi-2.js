"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshArray = void 0;
/**
 * Function that mesh an array of strings
 * @param words The array of strings
 * @returns a tuple of bool and string
 */
function MeshArray(words) {
    let result = [false, undefined];
    if (words.length === 0 || words.length === 1) {
        return result;
    }
    let any_dont = true;
    let concatenation = "";
    for (let i = 1; i < words.length; ++i) {
        let pivot_concatenation = "";
        for (let j = words[i - 1].length - 1; j >= 0; --j) {
            if (words[i].startsWith(words[i - 1].slice(j, words[i - 1].length))) {
                pivot_concatenation = words[i - 1].slice(j, words[i - 1].length);
            }
        }
        if (pivot_concatenation.length !== 0) {
            concatenation += pivot_concatenation;
        }
        else {
            any_dont = false;
        }
    }
    if (any_dont === true) {
        result[0] = true;
        result[1] = concatenation;
    }
    return result;
}
exports.MeshArray = MeshArray;
console.log(MeshArray(["allow", "lowering", "ringmaster", "terror"]));
