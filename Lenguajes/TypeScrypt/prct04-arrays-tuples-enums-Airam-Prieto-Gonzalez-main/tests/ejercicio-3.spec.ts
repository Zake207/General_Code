import { describe, expect, test } from "vitest"
import { GetScore } from "../src/ejercicio-3"

describe("GetScore", () => {
    test("getScore([]) // []", () => {
        expect(GetScore([])).toStrictEqual([])
    })
    test("getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']) // [undefined, 12, 11, undefined, 5]", () => {
        expect(GetScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'])).toStrictEqual([undefined, 12, 11, undefined, 5])
    })
    // Additional test cases
    test("getScore(['a', 'b', 'c']) // [1, 3, 3]", () => {
        expect(GetScore(['a', 'b', 'c'])).toStrictEqual([1, 3, 3])
    })
    test("getScore(['']) // [0]", () => {
        expect(GetScore([''])).toStrictEqual([0])
    })
    test("getScore(['example']) // [18]", () => {
        expect(GetScore(['example'])).toStrictEqual([18])
    })
})