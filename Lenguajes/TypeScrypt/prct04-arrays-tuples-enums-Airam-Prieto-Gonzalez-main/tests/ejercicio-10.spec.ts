import { describe, test, expect } from 'vitest';
import { FromArrayToRanges, FromRangesToArray} from '../src/ejercicio-10';

describe('FromArrayToRanges', () => {
    test('Test 1', () => {
        expect(FromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).toBe('5_7,9,12_14');
    });
    test('Test 2', () => {
        expect(FromArrayToRanges([17])).toBe('17');
    });
    test('Test 3', () => {
        expect(FromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).toBe('-3_-1,3,5_7');
    });
    test('Test 4', () => {
        expect(FromArrayToRanges([3, 5, 6, 7, 9, 10])).toBe('3,5_7,9_10');
    });
});

describe('FromRangesToArray', () => {
        test('Test 1', () => {
                expect(FromRangesToArray('5_7,9,12_14')).toStrictEqual([5, 6, 7, 9, 12, 13, 14]);
        });
        test('Test 2', () => {
                expect(FromRangesToArray('17')).toStrictEqual([17]);
        });
        test('Test 3', () => {
                expect(FromRangesToArray('-3_-1,3,5_7')).toStrictEqual([-3, -2, -1, 3, 5, 6, 7]);
        });
        test('Test 4', () => {
                expect(FromRangesToArray('3,5_7,9_10')).toStrictEqual([3, 5, 6, 7, 9, 10]);
        });
});