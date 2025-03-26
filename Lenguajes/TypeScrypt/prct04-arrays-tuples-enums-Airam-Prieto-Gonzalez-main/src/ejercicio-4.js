"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPoints = void 0;
/**
 * Function that returns the sum of the points of the objects
 * @param objects Vector with the points of the objects
 * @param fase Number of the phase
 * @returns Total points
 *
 * ```typescript
 * console.log(GetPoints([1, 2, 3], 10)) // Expected output 55
 * console.log(GetPoints([1, 2, 3], 5)) // Expected output 15
 * console.log(GetPoints([2, 3, 7], 25)) // Expected output 211
 *
 */
function GetPoints(objects, fase) {
    if (!objects.length) {
        return undefined;
    }
    for (let i = 0; i < objects.length; ++i) {
        if (objects[i] < 0) {
            return undefined;
        }
    }
    // Create an array than will be filled with the numbers, avoiding repetitions
    let points = [];
    objects.forEach((object) => {
        for (let i = 1; i <= Math.floor(fase / object); ++i) {
            if (points.includes(i * object)) {
                continue;
            }
            else {
                points.push(i * object);
            }
        }
    });
    return points.reduce((total, value) => total + value, 0);
}
exports.GetPoints = GetPoints;
