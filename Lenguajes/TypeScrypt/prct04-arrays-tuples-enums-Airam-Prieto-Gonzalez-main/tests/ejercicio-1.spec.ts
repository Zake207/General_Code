import { describe, expect, test } from "vitest"
import { ComplexAdd, ComplexAbs, ComplexConj, ComplexDiv, ComplexProd, ComplexMul, ComplexSub } from "../src/ejercicio-1"

describe("ComplexAdd function tests", () => {
        test("ComplexAdd([5,2], [0,2]) = [5,4]", () => {
                expect(ComplexAdd([5,2], [0,2])).toStrictEqual([5,4])
        })
        test("ComplexAdd([5,2], [3,1]) = [8,3]", () => {
                expect(ComplexAdd([5,2], [3,1])).toStrictEqual([8,3])
        })
        test("ComplexAdd([5,2], [0,0]) = [5,2]", () => {
                expect(ComplexAdd([5,2], [0,0])).toStrictEqual([5,2])
        })
        test("ComplexAdd([5,2], [-3,-1]) = [2,1]", () => {
                expect(ComplexAdd([5,2], [-3,-1])).toStrictEqual([2,1])
        })
})

describe("ComplexSub function tests", () => {
        test("ComplexSub([5,2], [0,2]) = [5,0]", () => {
                expect(ComplexSub([5,2], [0,2])).toStrictEqual([5,0])
        })
        test("ComplexSub([5,2], [3,1]) = [2,1]", () => {
                expect(ComplexSub([5,2], [3,1])).toStrictEqual([2,1])
        })
        test("ComplexSub([5,2], [0,0]) = [5,2]", () => {
                expect(ComplexSub([5,2], [0,0])).toStrictEqual([5,2])
        })
        test("ComplexSub([5,2], [-3,-1]) = [8,3]", () => {
                expect(ComplexSub([5,2], [-3,-1])).toStrictEqual([8,3])
        })

})

describe("ComplexMul function tests", () => {
        test("ComplexMul([5,2], [0,2]) = [-4,10]", () => {
                expect(ComplexMul([5,2], [0,2])).toStrictEqual([-4,10])
        })
        test("ComplexMul([5,2], [3,1]) = [13,11]", () => {
                expect(ComplexMul([5,2], [3,1])).toStrictEqual([13,11])
        })
        test("ComplexMul([5,2], [0,0]) = [0,0]", () => {
                expect(ComplexMul([5,2], [0,0])).toStrictEqual([0,0])
        })
        test("ComplexMul([5,2], [-3,-1]) = [-13,-11]", () => {
                expect(ComplexMul([5,2], [-3,-1])).toStrictEqual([-13,-11])
        })

})

describe("ComplexDiv function tests", () => {
        test("ComplexDiv([5,2], [0,2]) = [1, -2.5]", () => {
                expect(ComplexDiv([5,2], [0,2])).toStrictEqual([1, -2.5])
        })
        test("ComplexDiv([5,2], [3,1]) = [2,1]", () => {
                expect(ComplexDiv([5,2], [3,1])).toStrictEqual([1.7,0.1])
        })
        test("ComplexDiv([5,2], [0,0]) = [Infinity, Infinity]", () => {
                expect(ComplexDiv([5,2], [0,0])).toStrictEqual([Infinity, Infinity])
        })
        test("ComplexDiv([5,2], [-3,-1]) = [-1,1]", () => {
                expect(ComplexDiv([5,2], [-3,-1])).toStrictEqual([-1.7,-0.1])
        })

})

describe("ComplexProd function tests", () => {
        test("ComplexProd([5,2], 2) = [10,4]", () => {
                expect(ComplexProd([5,2], 2)).toStrictEqual([10,4])
        })
        test("ComplexProd([5,2], 0) = [0,0]", () => {
                expect(ComplexProd([5,2], 0)).toStrictEqual([0,0])
        })
        test("ComplexProd([5,2], -2) = [-10,-4]", () => {
                expect(ComplexProd([5,2], -2)).toStrictEqual([-10,-4])
        })
        test("ComplexProd([5,2], 1) = [5,2]", () => {
                expect(ComplexProd([5,2], 1)).toStrictEqual([5,2])
        })
})

describe("ComplexAbs function tests", () => {
        test("ComplexAbs([5,2]) = 5.385164807134504", () => {
                expect(ComplexAbs([5,2])).toBeCloseTo(5.385164807134504)
        })
        test("ComplexAbs([0,0]) = 0", () => {
                expect(ComplexAbs([0,0])).toBeCloseTo(0)
        })
        test("ComplexAbs([5,0]) = 5", () => {
                expect(ComplexAbs([5,0])).toBeCloseTo(5)
        })
        test("ComplexAbs([0,5]) = 5", () => {
                expect(ComplexAbs([0,5])).toBeCloseTo(5)
        })
})

describe("ComplexConj function tests", () => {
        test("ComplexConj([5,2]) = [5,-2]", () => {
                expect(ComplexConj([5,2])).toStrictEqual([5,-2])
        })
        test("ComplexConj([0,0]) = [0,0]", () => {
                expect(ComplexConj([0,0])).toStrictEqual([0,0])
        })
        test("ComplexConj([5,0]) = [5,0]", () => {
                expect(ComplexConj([5,0])).toStrictEqual([5,0])
        })
        test("ComplexConj([0,5]) = [0,-5]", () => {
                expect(ComplexConj([0,5])).toStrictEqual([0,-5])
        })
})
