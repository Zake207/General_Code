"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ejercicio_5_1 = require("../src/ejercicio-5/ejercicio-5");
(0, vitest_1.describe)("Ejercicio 5 - Clases y métodos", () => {
    (0, vitest_1.test)("EmailNotifier - sendNotification", () => {
        const emailNotifier = new ejercicio_5_1.EmailNotifier({
            notify: (message) => `Sending notification by email: ${message}`,
        });
        (0, vitest_1.expect)(emailNotifier.sendNotification("Hello, world!")).toBe(undefined);
    });
    (0, vitest_1.test)("ShortMessageNotifier - sendNotification", () => {
        const shortMessageNotifier = new ejercicio_5_1.ShortMessageNotifier({
            notify: (message) => `Sending notification by SMS: ${message}`,
        });
        (0, vitest_1.expect)(shortMessageNotifier.sendNotification("Hello, world!")).toBe(undefined);
    });
});
