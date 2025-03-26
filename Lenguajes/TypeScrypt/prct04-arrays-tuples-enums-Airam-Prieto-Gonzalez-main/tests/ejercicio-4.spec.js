"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_4_1 = require("../src/ejercicio-4");
(0, vitest_1.describe)('GetPoints', () => {
    (0, vitest_1.test)('should return 55 for input [1, 2, 3] and fase 10', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1, 2, 3], 10)).toBe(55);
    });
    (0, vitest_1.test)('should return 15 for input [1, 2, 3] and fase 5', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1, 2, 3], 5)).toBe(15);
    });
    (0, vitest_1.test)('should return 211 for input [2, 3, 7] and fase 25', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([2, 3, 7], 25)).toBe(211);
    });
    (0, vitest_1.test)('should return undefined for empty input array', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([], 10)).toBeUndefined();
    });
    (0, vitest_1.test)('should return undefined for input array wtesth negative numbers', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1, -2, 3], 10)).toBeUndefined();
    });
    (0, vitest_1.test)('should return 0 for input [10, 20, 30] and fase 5', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([10, 20, 30], 5)).toBe(0);
    });
    (0, vitest_1.test)('should return 1 for input [1] and fase 1', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1], 1)).toBe(1);
    });
    (0, vitest_1.test)('should return 0 for input [1] and fase 0', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1], 0)).toBe(0);
    });
    (0, vitest_1.test)('should return 0 for input [1] and fase -1', () => {
        (0, vitest_1.expect)((0, ejercicio_4_1.GetPoints)([1], -1)).toBe(0);
    });
});
