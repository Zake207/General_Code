import { describe, test, expect } from 'vitest';
import { CustomMap } from '../src/ejercicio-6';

describe('CustomMap', () => {
        test('Addition', () => {
                expect(CustomMap([0, 1, 2, 3, 4], (item) => item + 100)).toEqual([100, 101, 102, 103, 104]);
        });
        test('Subtraction', () => {
                expect(CustomMap([0, 1, 2, 3, 4], (item) => item - 2)).toEqual([-2, -1, 0, 1, 2]);
        });
        test('Multiplication', () => {
                expect(CustomMap([0, 1, 2, 3, 4], (item) => item * item)).toEqual([0, 1, 4, 9, 16]);
        });
        test('Division', () => {
                expect(CustomMap([1, 2, 3, 4, 5], (item) => item / 4)).toEqual([0.25, 0.5, 0.75, 1, 1.25]);
        });
});