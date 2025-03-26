"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSpiralMatrix = void 0;
/**
 * Function that returns a matrix with the spiral pattern
 * @param size The size of the matrix
 * @returns The matrix with the spiral pattern
 *
 * ```typescript
 * GetSpiralMatrix(3)
 * // Expected output
 * [
 *      [1, 2, 3],
 *      [8, 9, 4],
 *      [7, 6, 5]
 * ]
 *
 * GetSpiralMatrix(4)
 * // Expected output
 * [
 *      [1, 2, 3, 4],
 *      [12,13,14, 5],
 *      [11,16,15, 6],
 *      [10, 9, 8, 7]
 * ]
 *
 * GetSpiralMatrix(5)
 * // Expected output
 * [
 *      [1, 2, 3, 4, 5],
 *      [16,17,18,19, 6],
 *      [15,24,25,20, 7],
 *      [14,23,22,21, 8],
 *      [13,12,11,10, 9]
 * ]
 * ```
 */
function GetSpiralMatrix(size) {
    if (size <= 0) {
        return undefined;
    }
    size = Math.trunc(size);
    let matrix = Array.from({ length: size }, () => Array(size).fill(0));
    // Variable declaration
    let value = 1;
    let top = 0;
    let bottom = size - 1;
    let left = 0;
    let right = size - 1;
    // Main loop
    while (top <= bottom && left <= right) {
        // Top Row
        for (let i = left; i <= right; ++i) {
            matrix[top][i] = value;
            ++value;
        }
        ++top;
        // Right Colunm
        for (let i = top; i <= bottom; ++i) {
            matrix[i][right] = value;
            ++value;
        }
        --right;
        // Bottom Row
        for (let i = right; i >= left; --i) {
            matrix[bottom][i] = value;
            ++value;
        }
        --bottom;
        // Left Colunm
        for (let i = bottom; i >= top; --i) {
            matrix[i][left] = value;
            ++value;
        }
        ++left;
    }
    return matrix;
}
exports.GetSpiralMatrix = GetSpiralMatrix;
