"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_3_1 = require("../src/ejercicio-3");
(0, vitest_1.describe)("GetScore", () => {
    (0, vitest_1.test)("getScore([]) // []", () => {
        (0, vitest_1.expect)((0, ejercicio_3_1.GetScore)([])).toStrictEqual([]);
    });
    (0, vitest_1.test)("getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']) // [undefined, 12, 11, undefined, 5]", () => {
        (0, vitest_1.expect)((0, ejercicio_3_1.GetScore)(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'])).toStrictEqual([undefined, 12, 11, undefined, 5]);
    });
    // Additional test cases
    (0, vitest_1.test)("getScore(['a', 'b', 'c']) // [1, 3, 3]", () => {
        (0, vitest_1.expect)((0, ejercicio_3_1.GetScore)(['a', 'b', 'c'])).toStrictEqual([1, 3, 3]);
    });
    (0, vitest_1.test)("getScore(['']) // [0]", () => {
        (0, vitest_1.expect)((0, ejercicio_3_1.GetScore)([''])).toStrictEqual([0]);
    });
    (0, vitest_1.test)("getScore(['example']) // [18]", () => {
        (0, vitest_1.expect)((0, ejercicio_3_1.GetScore)(['example'])).toStrictEqual([18]);
    });
});
