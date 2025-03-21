import { describe, test, expect } from 'vitest';
import { MeshArray } from '../src/modi-2';

describe ('MediaFilter', () => {
        test('["allow", "lowering", "ringmaster", "terror"]', () => {
                expect(MeshArray(["allow", "lowering", "ringmaster", "terror"])).toStrictEqual([ true, 'lowringter' ]);
        });
        test('["kingdom", "dominator", "notorious", "usual", "allegory"]', () => {
                expect(MeshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])).toStrictEqual([ false, undefined ]);
        });
        test('["kingdom"]', () => {
                expect(MeshArray(["kingdom"])).toStrictEqual([ false, undefined ]);
        });
        test('["behemoth" y "mother"]', () => {
                expect(MeshArray(["behemoth", "mother"])).toStrictEqual([ true, 'moth' ]);
        });
        
        
})