"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_9_1 = require("../src/ejercicio-9");
(0, vitest_1.describe)('MyAppend', () => {
    (0, vitest_1.test)('should append two number arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyAppend)([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    (0, vitest_1.test)('should append two string arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyAppend)(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    });
    (0, vitest_1.test)('should append two boolean arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyAppend)([true, false], [false, true])).toEqual([true, false, false, true]);
    });
    (0, vitest_1.test)('should append an empty array to a non-empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyAppend)([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
});
(0, vitest_1.describe)('MyConcatenate', () => {
    (0, vitest_1.test)('should concatenate multiple number arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyConcatenate)([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    (0, vitest_1.test)('should concatenate multiple string arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyConcatenate)(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
    (0, vitest_1.test)('should concatenate multiple boolean arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyConcatenate)([true], [false], [true])).toEqual([true, false, true]);
    });
    (0, vitest_1.test)('should concatenate arrays with empty arrays', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyConcatenate)([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
    });
});
(0, vitest_1.describe)('MyFilter', () => {
    (0, vitest_1.test)('should filter even numbers', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyFilter)([1, 2, 3, 4], (item) => item % 2 === 0)).toEqual([false, true, false, true]);
    });
    (0, vitest_1.test)('should filter strings with length greater than 1', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyFilter)(['a', 'ab', 'abc'], (item) => item.length > 1)).toEqual([false, true, true]);
    });
    (0, vitest_1.test)('should filter true values', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyFilter)([true, false, true], (item) => item === true)).toEqual([true, false, true]);
    });
    (0, vitest_1.test)('should filter an empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyFilter)([], (item) => item)).toEqual([]);
    });
});
(0, vitest_1.describe)('MyLenght', () => {
    (0, vitest_1.test)('should return the length of a number array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyLenght)([1, 2, 3])).toBe(3);
    });
    (0, vitest_1.test)('should return the length of a string array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyLenght)(['a', 'b', 'c'])).toBe(3);
    });
    (0, vitest_1.test)('should return the length of a boolean array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyLenght)([true, false, true])).toBe(3);
    });
    (0, vitest_1.test)('should return the length of an empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyLenght)([])).toBe(0);
    });
});
(0, vitest_1.describe)('MyMap', () => {
    (0, vitest_1.test)('should square numbers', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyMap)([1, 2, 3], (item) => item * item)).toEqual([1, 4, 9]);
    });
    (0, vitest_1.test)('should uppercase strings', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyMap)(['a', 'b', 'c'], (item) => item.toUpperCase())).toEqual(['A', 'B', 'C']);
    });
    (0, vitest_1.test)('should negate boolean values', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyMap)([true, false, true], (item) => !item)).toEqual([false, true, false]);
    });
    (0, vitest_1.test)('should map an empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyMap)([], (item) => item)).toEqual([]);
    });
});
(0, vitest_1.describe)('MyReduce', () => {
    (0, vitest_1.test)('should sum numbers', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReduce)([1, 2, 3, 4], (acum, item) => acum + item)).toBe(10);
    });
    (0, vitest_1.test)('should concatenate strings', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReduce)(['a', 'b', 'c'], (acum, item) => acum + item)).toBe('abc');
    });
    (0, vitest_1.test)('should return true if all values are true', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReduce)([true, true, true], (acum, item) => acum && item)).toBe(true);
    });
    (0, vitest_1.test)('should return undefined for an empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReduce)([], (acum, item) => acum + item)).toBeUndefined();
    });
});
(0, vitest_1.describe)('MyReverse', () => {
    (0, vitest_1.test)('should reverse a number array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReverse)([1, 2, 3])).toEqual([3, 2, 1]);
    });
    (0, vitest_1.test)('should reverse a string array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReverse)(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });
    (0, vitest_1.test)('should reverse a boolean array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReverse)([true, false, true])).toEqual([true, false, true]);
    });
    (0, vitest_1.test)('should reverse an empty array', () => {
        (0, vitest_1.expect)((0, ejercicio_9_1.MyReverse)([])).toEqual([]);
    });
});
