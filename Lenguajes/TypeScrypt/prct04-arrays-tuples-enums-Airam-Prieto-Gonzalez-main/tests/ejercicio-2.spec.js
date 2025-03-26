"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_2_1 = require("../src/ejercicio-2");
(0, vitest_1.describe)("DecodeResistor", () => {
    (0, vitest_1.test)("DecodeResistor('Marron', 'Verde') = 15", () => {
        (0, vitest_1.expect)((0, ejercicio_2_1.DecodeResistor)("Marron", "Verde")).toBe(15);
    });
    (0, vitest_1.test)("DecodeResistor('Marron', 'Verde', 'Violeta') = 15", () => {
        (0, vitest_1.expect)((0, ejercicio_2_1.DecodeResistor)("Marron", "Verde", "Violeta")).toBe(15);
    });
    (0, vitest_1.test)("DecodeResistor('Verde', 'Lila') = undefined", () => {
        (0, vitest_1.expect)((0, ejercicio_2_1.DecodeResistor)("Verde", "Lila")).toBe(undefined);
    });
    (0, vitest_1.test)("DecodeResistor('Verde', 'Lila', 'Amarillo') = undefined", () => {
        (0, vitest_1.expect)((0, ejercicio_2_1.DecodeResistor)("Verde", "Lila", "Amarillo")).toBe(undefined);
    });
    (0, vitest_1.test)("DecodeResistor('Negro', 'Rojo', 'Amarillo', 'Rojo') = 2", () => {
        (0, vitest_1.expect)((0, ejercicio_2_1.DecodeResistor)("Negro", "Rojo", "Amarillo", "Rojo")).toBe(2);
    });
});
