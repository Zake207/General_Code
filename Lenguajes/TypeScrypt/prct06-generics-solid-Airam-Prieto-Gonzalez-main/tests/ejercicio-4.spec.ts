import { describe, test, expect } from "vitest";
import {
  Scanner,
  Printer,
  PrinterScanner,
} from "../src/ejercicio-4/ejercicio-4";

describe("Ejercicio 4 - Interfaces", () => {
  test("Printer", () => {
    const printer = new Printer();
    expect(printer.print()).toBe("Printing...");
  });

  test("Scanner", () => {
    const scanner = new Scanner();
    expect(scanner.scan()).toBe("Scanning...");
  });

  test("PrinterScanner", () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).toBe("Printing...");
    expect(printerScanner.scan()).toBe("Scanning...");
  });
});
