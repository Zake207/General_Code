import { describe, test, expect } from 'vitest';
import { GetSpiralMatrix } from '../src/ejercicio-5';

describe('GetSpiralMatrix', () => {
        test('should return undefined for size 0', () => {
                expect(GetSpiralMatrix(0)).toBeUndefined();
        });

        test('should return undefined for negative size', () => {
                expect(GetSpiralMatrix(-1)).toBeUndefined();
        });

        test('should return the correct spiral matrix for size 1', () => {
                expect(GetSpiralMatrix(1)).toEqual([[1]]);
        });

        test('should return the correct spiral matrix for size 2', () => {
                expect(GetSpiralMatrix(2)).toEqual([
                        [1, 2],
                        [4, 3]
                ]);
        });

        test('should return the correct spiral matrix for size 3', () => {
                expect(GetSpiralMatrix(3)).toEqual([
                        [1, 2, 3],
                        [8, 9, 4],
                        [7, 6, 5]
                ]);
        });

        test('should return the correct spiral matrix for size 4', () => {
                expect(GetSpiralMatrix(4)).toEqual([
                        [1, 2, 3, 4],
                        [12, 13, 14, 5],
                        [11, 16, 15, 6],
                        [10, 9, 8, 7]
                ]);
        });

        test('should return the correct spiral matrix for size 5', () => {
                expect(GetSpiralMatrix(5)).toEqual([
                        [1, 2, 3, 4, 5],
                        [16, 17, 18, 19, 6],
                        [15, 24, 25, 20, 7],
                        [14, 23, 22, 21, 8],
                        [13, 12, 11, 10, 9]
                ]);
        });
});