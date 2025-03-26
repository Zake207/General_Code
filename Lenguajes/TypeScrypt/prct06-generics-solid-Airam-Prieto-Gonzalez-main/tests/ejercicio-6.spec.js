"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_6_1 = require("../src/ejercicio-6/ejercicio-6");
(0, vitest_1.describe)('Ejercicio 6 - Clases abstractas', () => {
    (0, vitest_1.test)('Sparrow class', () => {
        const sparrow = new ejercicio_6_1.Sparrow();
        (0, vitest_1.expect)(sparrow.name).toBe('Sparrow');
        (0, vitest_1.expect)(sparrow.airSpeed).toBe(20);
        (0, vitest_1.expect)(sparrow.fly()).toBe('Sparrow is flying at 20 km/h.');
    });
    (0, vitest_1.test)('Penguin class', () => {
        const penguin = new ejercicio_6_1.Penguin();
        (0, vitest_1.expect)(penguin.name).toBe('Penguin');
        (0, vitest_1.expect)(penguin.action()).toBe('Penguin does everything, but fly.');
    });
});
