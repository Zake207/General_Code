import { describe, test, expect } from "vitest";
import {
  EmailNotifier,
  ShortMessageNotifier,
} from "../src/ejercicio-5/ejercicio-5";

describe("Ejercicio 5 - Clases y métodos", () => {
  test("EmailNotifier - sendNotification", () => {
    const emailNotifier = new EmailNotifier({
      notify: (message: string) => `Sending notification by email: ${message}`,
    });

    expect(emailNotifier.sendNotification("Hello, world!")).toBe(undefined);
  });

  test("ShortMessageNotifier - sendNotification", () => {
    const shortMessageNotifier = new ShortMessageNotifier({
      notify: (message: string) => `Sending notification by SMS: ${message}`,
    });

    expect(shortMessageNotifier.sendNotification("Hello, world!")).toBe(
      undefined,
    );
  });
});
