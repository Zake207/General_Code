"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const modi_1_1 = require("../src/modi-1");
(0, vitest_1.describe)('MediaFilter', () => {
    (0, vitest_1.test)('[[1,2,3],[4,5,6],[7,8,9]]', () => {
        (0, vitest_1.expect)((0, modi_1_1.MediaFilter)([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 3)).toStrictEqual([[3, 4, 5], [5, 5, 5], [6, 6, 5]]);
    });
});
