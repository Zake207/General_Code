"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_5_1 = require("../src/ejercicio-5");
(0, vitest_1.describe)('GetSpiralMatrix', () => {
    (0, vitest_1.test)('should return undefined for size 0', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(0)).toBeUndefined();
    });
    (0, vitest_1.test)('should return undefined for negative size', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(-1)).toBeUndefined();
    });
    (0, vitest_1.test)('should return the correct spiral matrix for size 1', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(1)).toEqual([[1]]);
    });
    (0, vitest_1.test)('should return the correct spiral matrix for size 2', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(2)).toEqual([
            [1, 2],
            [4, 3]
        ]);
    });
    (0, vitest_1.test)('should return the correct spiral matrix for size 3', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(3)).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]);
    });
    (0, vitest_1.test)('should return the correct spiral matrix for size 4', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(4)).toEqual([
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ]);
    });
    (0, vitest_1.test)('should return the correct spiral matrix for size 5', () => {
        (0, vitest_1.expect)((0, ejercicio_5_1.GetSpiralMatrix)(5)).toEqual([
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9]
        ]);
    });
});
