"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_1_1 = require("../src/ejercicio-1");
(0, vitest_1.describe)("ComplexAdd function tests", () => {
    (0, vitest_1.test)("ComplexAdd([5,2], [0,2]) = [5,4]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAdd)([5, 2], [0, 2])).toStrictEqual([5, 4]);
    });
    (0, vitest_1.test)("ComplexAdd([5,2], [3,1]) = [8,3]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAdd)([5, 2], [3, 1])).toStrictEqual([8, 3]);
    });
    (0, vitest_1.test)("ComplexAdd([5,2], [0,0]) = [5,2]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAdd)([5, 2], [0, 0])).toStrictEqual([5, 2]);
    });
    (0, vitest_1.test)("ComplexAdd([5,2], [-3,-1]) = [2,1]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAdd)([5, 2], [-3, -1])).toStrictEqual([2, 1]);
    });
});
(0, vitest_1.describe)("ComplexSub function tests", () => {
    (0, vitest_1.test)("ComplexSub([5,2], [0,2]) = [5,0]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexSub)([5, 2], [0, 2])).toStrictEqual([5, 0]);
    });
    (0, vitest_1.test)("ComplexSub([5,2], [3,1]) = [2,1]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexSub)([5, 2], [3, 1])).toStrictEqual([2, 1]);
    });
    (0, vitest_1.test)("ComplexSub([5,2], [0,0]) = [5,2]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexSub)([5, 2], [0, 0])).toStrictEqual([5, 2]);
    });
    (0, vitest_1.test)("ComplexSub([5,2], [-3,-1]) = [8,3]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexSub)([5, 2], [-3, -1])).toStrictEqual([8, 3]);
    });
});
(0, vitest_1.describe)("ComplexMul function tests", () => {
    (0, vitest_1.test)("ComplexMul([5,2], [0,2]) = [-4,10]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexMul)([5, 2], [0, 2])).toStrictEqual([-4, 10]);
    });
    (0, vitest_1.test)("ComplexMul([5,2], [3,1]) = [13,11]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexMul)([5, 2], [3, 1])).toStrictEqual([13, 11]);
    });
    (0, vitest_1.test)("ComplexMul([5,2], [0,0]) = [0,0]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexMul)([5, 2], [0, 0])).toStrictEqual([0, 0]);
    });
    (0, vitest_1.test)("ComplexMul([5,2], [-3,-1]) = [-13,-11]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexMul)([5, 2], [-3, -1])).toStrictEqual([-13, -11]);
    });
});
(0, vitest_1.describe)("ComplexDiv function tests", () => {
    (0, vitest_1.test)("ComplexDiv([5,2], [0,2]) = [1, -2.5]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexDiv)([5, 2], [0, 2])).toStrictEqual([1, -2.5]);
    });
    (0, vitest_1.test)("ComplexDiv([5,2], [3,1]) = [2,1]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexDiv)([5, 2], [3, 1])).toStrictEqual([1.7, 0.1]);
    });
    (0, vitest_1.test)("ComplexDiv([5,2], [0,0]) = [Infinity, Infinity]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexDiv)([5, 2], [0, 0])).toStrictEqual([Infinity, Infinity]);
    });
    (0, vitest_1.test)("ComplexDiv([5,2], [-3,-1]) = [-1,1]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexDiv)([5, 2], [-3, -1])).toStrictEqual([-1.7, -0.1]);
    });
});
(0, vitest_1.describe)("ComplexProd function tests", () => {
    (0, vitest_1.test)("ComplexProd([5,2], 2) = [10,4]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexProd)([5, 2], 2)).toStrictEqual([10, 4]);
    });
    (0, vitest_1.test)("ComplexProd([5,2], 0) = [0,0]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexProd)([5, 2], 0)).toStrictEqual([0, 0]);
    });
    (0, vitest_1.test)("ComplexProd([5,2], -2) = [-10,-4]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexProd)([5, 2], -2)).toStrictEqual([-10, -4]);
    });
    (0, vitest_1.test)("ComplexProd([5,2], 1) = [5,2]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexProd)([5, 2], 1)).toStrictEqual([5, 2]);
    });
});
(0, vitest_1.describe)("ComplexAbs function tests", () => {
    (0, vitest_1.test)("ComplexAbs([5,2]) = 5.385164807134504", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAbs)([5, 2])).toBeCloseTo(5.385164807134504);
    });
    (0, vitest_1.test)("ComplexAbs([0,0]) = 0", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAbs)([0, 0])).toBeCloseTo(0);
    });
    (0, vitest_1.test)("ComplexAbs([5,0]) = 5", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAbs)([5, 0])).toBeCloseTo(5);
    });
    (0, vitest_1.test)("ComplexAbs([0,5]) = 5", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexAbs)([0, 5])).toBeCloseTo(5);
    });
});
(0, vitest_1.describe)("ComplexConj function tests", () => {
    (0, vitest_1.test)("ComplexConj([5,2]) = [5,-2]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexConj)([5, 2])).toStrictEqual([5, -2]);
    });
    (0, vitest_1.test)("ComplexConj([0,0]) = [0,0]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexConj)([0, 0])).toStrictEqual([0, 0]);
    });
    (0, vitest_1.test)("ComplexConj([5,0]) = [5,0]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexConj)([5, 0])).toStrictEqual([5, 0]);
    });
    (0, vitest_1.test)("ComplexConj([0,5]) = [0,-5]", () => {
        (0, vitest_1.expect)((0, ejercicio_1_1.ComplexConj)([0, 5])).toStrictEqual([0, -5]);
    });
});
