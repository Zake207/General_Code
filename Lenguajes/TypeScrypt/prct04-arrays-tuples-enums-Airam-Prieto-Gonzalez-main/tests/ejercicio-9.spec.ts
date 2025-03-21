import { describe, test, expect } from 'vitest';
import { MyAppend, MyConcatenate, MyFilter, MyLenght, MyMap, MyReduce, MyReverse } from '../src/ejercicio-9';

describe('MyAppend', () => {
        test('should append two number arrays', () => {
                expect(MyAppend([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        });

        test('should append two string arrays', () => {
                expect(MyAppend(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
        });

        test('should append two boolean arrays', () => {
                expect(MyAppend([true, false], [false, true])).toEqual([true, false, false, true]);
        });

        test('should append an empty array to a non-empty array', () => {
                expect(MyAppend([1, 2, 3], [])).toEqual([1, 2, 3]);
        });
});

describe('MyConcatenate', () => {
        test('should concatenate multiple number arrays', () => {
                expect(MyConcatenate([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        });

        test('should concatenate multiple string arrays', () => {
                expect(MyConcatenate(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
        });

        test('should concatenate multiple boolean arrays', () => {
                expect(MyConcatenate([true], [false], [true])).toEqual([true, false, true]);
        });

        test('should concatenate arrays with empty arrays', () => {
                expect(MyConcatenate([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
        });
});

describe('MyFilter', () => {
        test('should filter even numbers', () => {
                expect(MyFilter([1, 2, 3, 4], (item) => item % 2 === 0)).toEqual([false, true, false, true]);
        });

        test('should filter strings with length greater than 1', () => {
                expect(MyFilter(['a', 'ab', 'abc'], (item) => item.length > 1)).toEqual([false, true, true]);
        });

        test('should filter true values', () => {
                expect(MyFilter([true, false, true], (item) => item === true)).toEqual([true, false, true]);
        });

        test('should filter an empty array', () => {
                expect(MyFilter([], (item) => item)).toEqual([]);
        });
});

describe('MyLenght', () => {
        test('should return the length of a number array', () => {
                expect(MyLenght([1, 2, 3])).toBe(3);
        });

        test('should return the length of a string array', () => {
                expect(MyLenght(['a', 'b', 'c'])).toBe(3);
        });

        test('should return the length of a boolean array', () => {
                expect(MyLenght([true, false, true])).toBe(3);
        });

        test('should return the length of an empty array', () => {
                expect(MyLenght([])).toBe(0);
        });
});

describe('MyMap', () => {
        test('should square numbers', () => {
                expect(MyMap([1, 2, 3], (item) => item * item)).toEqual([1, 4, 9]);
        });

        test('should uppercase strings', () => {
                expect(MyMap(['a', 'b', 'c'], (item) => item.toUpperCase())).toEqual(['A', 'B', 'C']);
        });

        test('should negate boolean values', () => {
                expect(MyMap([true, false, true], (item) => !item)).toEqual([false, true, false]);
        });

        test('should map an empty array', () => {
                expect(MyMap([], (item) => item)).toEqual([]);
        });
});

describe('MyReduce', () => {
        test('should sum numbers', () => {
                expect(MyReduce([1, 2, 3, 4], (acum, item) => acum + item)).toBe(10);
        });

        test('should concatenate strings', () => {
                expect(MyReduce(['a', 'b', 'c'], (acum, item) => acum + item)).toBe('abc');
        });

        test('should return true if all values are true', () => {
                expect(MyReduce([true, true, true], (acum, item) => acum && item)).toBe(true);
        });

        test('should return undefined for an empty array', () => {
                expect(MyReduce([], (acum, item) => acum + item)).toBeUndefined();
        });
});

describe('MyReverse', () => {
        test('should reverse a number array', () => {
                expect(MyReverse([1, 2, 3])).toEqual([3, 2, 1]);
        });

        test('should reverse a string array', () => {
                expect(MyReverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
        });

        test('should reverse a boolean array', () => {
                expect(MyReverse([true, false, true])).toEqual([true, false, true]);
        });

        test('should reverse an empty array', () => {
                expect(MyReverse([])).toEqual([]);
        });
});