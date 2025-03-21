import { describe, test, expect } from 'vitest';
import { GetPoints } from '../src/ejercicio-4';

describe('GetPoints', () => {
        test('should return 55 for input [1, 2, 3] and fase 10', () => {
                expect(GetPoints([1, 2, 3], 10)).toBe(55);
        });

        test('should return 15 for input [1, 2, 3] and fase 5', () => {
                expect(GetPoints([1, 2, 3], 5)).toBe(15);
        });

        test('should return 211 for input [2, 3, 7] and fase 25', () => {
                expect(GetPoints([2, 3, 7], 25)).toBe(211);
        });

        test('should return undefined for empty input array', () => {
                expect(GetPoints([], 10)).toBeUndefined();
        });

        test('should return undefined for input array wtesth negative numbers', () => {
                expect(GetPoints([1, -2, 3], 10)).toBeUndefined();
        });

        test('should return 0 for input [10, 20, 30] and fase 5', () => {
                expect(GetPoints([10, 20, 30], 5)).toBe(0);
        });

        test('should return 1 for input [1] and fase 1', () => {
                expect(GetPoints([1], 1)).toBe(1);
        });
        test('should return 0 for input [1] and fase 0', () => {
                expect(GetPoints([1], 0)).toBe(0);
        });
        test('should return 0 for input [1] and fase -1', () => {
                expect(GetPoints([1], -1)).toBe(0);
        });
});