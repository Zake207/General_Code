"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_6_1 = require("../src/ejercicio-6");
(0, vitest_1.describe)('CustomMap', () => {
    (0, vitest_1.test)('Addition', () => {
        (0, vitest_1.expect)((0, ejercicio_6_1.CustomMap)([0, 1, 2, 3, 4], (item) => item + 100)).toEqual([100, 101, 102, 103, 104]);
    });
    (0, vitest_1.test)('Subtraction', () => {
        (0, vitest_1.expect)((0, ejercicio_6_1.CustomMap)([0, 1, 2, 3, 4], (item) => item - 2)).toEqual([-2, -1, 0, 1, 2]);
    });
    (0, vitest_1.test)('Multiplication', () => {
        (0, vitest_1.expect)((0, ejercicio_6_1.CustomMap)([0, 1, 2, 3, 4], (item) => item * item)).toEqual([0, 1, 4, 9, 16]);
    });
    (0, vitest_1.test)('Division', () => {
        (0, vitest_1.expect)((0, ejercicio_6_1.CustomMap)([1, 2, 3, 4, 5], (item) => item / 4)).toEqual([0.25, 0.5, 0.75, 1, 1.25]);
    });
});
