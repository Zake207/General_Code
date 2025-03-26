"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const modi_2_1 = require("../src/modi-2");
(0, vitest_1.describe)('MediaFilter', () => {
    (0, vitest_1.test)('["allow", "lowering", "ringmaster", "terror"]', () => {
        (0, vitest_1.expect)((0, modi_2_1.MeshArray)(["allow", "lowering", "ringmaster", "terror"])).toStrictEqual([true, 'lowringter']);
    });
    (0, vitest_1.test)('["kingdom", "dominator", "notorious", "usual", "allegory"]', () => {
        (0, vitest_1.expect)((0, modi_2_1.MeshArray)(["kingdom", "dominator", "notorious", "usual", "allegory"])).toStrictEqual([false, undefined]);
    });
    (0, vitest_1.test)('["kingdom"]', () => {
        (0, vitest_1.expect)((0, modi_2_1.MeshArray)(["kingdom"])).toStrictEqual([false, undefined]);
    });
    (0, vitest_1.test)('["behemoth" y "mother"]', () => {
        (0, vitest_1.expect)((0, modi_2_1.MeshArray)(["behemoth", "mother"])).toStrictEqual([true, 'moth']);
    });
});
