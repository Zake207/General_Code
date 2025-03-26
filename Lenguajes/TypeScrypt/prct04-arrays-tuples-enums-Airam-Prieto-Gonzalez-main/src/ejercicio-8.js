"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPath = void 0;
/**
 * Recursive function that calculates all posibles paths of a matrix, starting from the top left corner to the bottom right corner.
 * @param row The current row
 * @param column The current column
 * @param matrix Matrix to traverse
 * @param road The current path taken
 * @returns The possible paths in a matrix
 *
 * ```typescript
 * PathCalculator(0, 0, [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [])
 * // Expected output: [[1, 4, 7, 8, 9], [1, 4, 5, 8, 9], [1, 4, 5, 6, 9], [1, 2, 5, 8, 9], [1, 2, 5, 6, 9], [1, 2, 3, 6, 9], [1, 2, 3, 6, 9]]
 * ```
 */
function PathCalculator(row, column, matrix, road) {
    if (row >= matrix.length || column >= matrix[0].length) {
        return [];
    }
    road.push(matrix[row][column]);
    if (row === matrix.length - 1 && column === matrix[0].length - 1) {
        return [road];
    }
    const down = PathCalculator(row + 1, column, matrix, [...road]);
    const right = PathCalculator(row, column + 1, matrix, [...road]);
    return [...down, ...right];
}
/**
 * Function that validates the input and calls the recursive function
 * @param rows Number of rows of the matrix
 * @param columns Number of columns of the matrix
 * @param matrix The matrix to traverse
 * @returns All possible paths in a matrix
 *
 * ```typescript
 * GetPath(3, 2, [[0, 1], [2, 3], [4, 5]])
 * // Expected output: [[0, 2, 4, 5], [0, 2, 3, 5], [0, 1, 3, 5], [0, 1, 3, 5]]
 *
 * GetPath(3, 3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * // Expected output: [[1, 4, 7, 8, 9], [1, 4, 5, 8, 9], [1, 4, 5, 6, 9], [1, 2, 5, 8, 9], [1, 2, 5, 6, 9], [1, 2, 3, 6, 9], [1, 2, 3, 6, 9]]
 *
 * GetPath(2, 3, [[1, 2, 3], [4, 5, 6]])
 * // Expected output: [[1, 4, 5, 6], [1, 2, 5, 6], [1, 2, 3, 6]]
 *
 * GetPath(3, 4, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
 * // Expected output: [[1, 5, 9, 10, 11, 12], [1, 5, 6, 10, 11, 12], [1, 5, 6, 7, 11, 12], [1, 5, 6, 7, 8, 12], [1, 2, 6, 10, 11, 12], [1, 2, 6, 7, 11, 12], [1, 2, 6, 7, 8, 12], [1, 2, 3, 7, 11, 12], [1, 2, 3, 7, 8, 12], [1, 2, 3, 4, 8, 12], [1, 2, 3, 4, 8, 12]]
 * ```
 *
 */
function GetPath(rows, columns, matrix) {
    if (matrix.length !== rows) {
        return undefined;
    }
    for (let row of matrix) {
        if (row.length !== columns) {
            return undefined;
        }
    }
    return PathCalculator(0, 0, matrix, []);
}
exports.GetPath = GetPath;
console.log(GetPath(3, 2, [
    [0, 1],
    [2, 3],
    [4, 5],
]));
console.log(GetPath(3, 3, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
console.log(GetPath(2, 3, [
    [1, 2, 3],
    [4, 5, 6],
]));
console.log(GetPath(3, 4, [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]));
