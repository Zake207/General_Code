import { describe, test, expect } from 'vitest';
import { MediaFilter } from '../src/modi-1';

describe ('MediaFilter', () => {
        test('[[1,2,3],[4,5,6],[7,8,9]]', () => {
                expect(MediaFilter([[1,2,3],[4,5,6],[7,8,9]], 3, 3)).toStrictEqual([ [ 3, 4, 5 ], [ 5, 5, 5 ], [ 6, 6, 5 ] ]);
        });
        
})