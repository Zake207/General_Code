import { describe, expect, test } from "vitest"
import { DecodeResistor } from "../src/ejercicio-2"

describe("DecodeResistor", () => {
        test("DecodeResistor('Marron', 'Verde') = 15", () => {
                expect(DecodeResistor("Marron", "Verde")).toBe(15)
        })
        test("DecodeResistor('Marron', 'Verde', 'Violeta') = 15", () => {
                expect(DecodeResistor("Marron", "Verde", "Violeta")).toBe(15)
        })
        test("DecodeResistor('Verde', 'Lila') = undefined", () => {
                expect(DecodeResistor("Verde", "Lila")).toBe(undefined)
        })
        test("DecodeResistor('Verde', 'Lila', 'Amarillo') = undefined", () => {
                expect(DecodeResistor("Verde", "Lila", "Amarillo")).toBe(undefined)
        })
        test("DecodeResistor('Negro', 'Rojo', 'Amarillo', 'Rojo') = 2", () => {
                expect(DecodeResistor("Negro", "Rojo", "Amarillo", "Rojo")).toBe(2)
        })
})