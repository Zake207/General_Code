"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_10_1 = require("../src/ejercicio-10");
(0, vitest_1.describe)('FromArrayToRanges', () => {
    (0, vitest_1.test)('Test 1', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromArrayToRanges)([5, 6, 7, 9, 12, 13, 14])).toBe('5_7,9,12_14');
    });
    (0, vitest_1.test)('Test 2', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromArrayToRanges)([17])).toBe('17');
    });
    (0, vitest_1.test)('Test 3', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromArrayToRanges)([-3, -2, -1, 3, 5, 6, 7])).toBe('-3_-1,3,5_7');
    });
    (0, vitest_1.test)('Test 4', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromArrayToRanges)([3, 5, 6, 7, 9, 10])).toBe('3,5_7,9_10');
    });
});
(0, vitest_1.describe)('FromRangesToArray', () => {
    (0, vitest_1.test)('Test 1', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromRangesToArray)('5_7,9,12_14')).toStrictEqual([5, 6, 7, 9, 12, 13, 14]);
    });
    (0, vitest_1.test)('Test 2', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromRangesToArray)('17')).toStrictEqual([17]);
    });
    (0, vitest_1.test)('Test 3', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromRangesToArray)('-3_-1,3,5_7')).toStrictEqual([-3, -2, -1, 3, 5, 6, 7]);
    });
    (0, vitest_1.test)('Test 4', () => {
        (0, vitest_1.expect)((0, ejercicio_10_1.FromRangesToArray)('3,5_7,9_10')).toStrictEqual([3, 5, 6, 7, 9, 10]);
    });
});
