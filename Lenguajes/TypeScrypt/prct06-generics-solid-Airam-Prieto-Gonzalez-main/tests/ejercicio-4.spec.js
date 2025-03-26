"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_4_1 = require("../src/ejercicio-4/ejercicio-4");
(0, vitest_1.describe)("Ejercicio 4 - Interfaces", () => {
    (0, vitest_1.test)("Printer", () => {
        const printer = new ejercicio_4_1.Printer();
        (0, vitest_1.expect)(printer.print()).toBe("Printing...");
    });
    (0, vitest_1.test)("Scanner", () => {
        const scanner = new ejercicio_4_1.Scanner();
        (0, vitest_1.expect)(scanner.scan()).toBe("Scanning...");
    });
    (0, vitest_1.test)("PrinterScanner", () => {
        const printerScanner = new ejercicio_4_1.PrinterScanner();
        (0, vitest_1.expect)(printerScanner.print()).toBe("Printing...");
        (0, vitest_1.expect)(printerScanner.scan()).toBe("Scanning...");
    });
});
