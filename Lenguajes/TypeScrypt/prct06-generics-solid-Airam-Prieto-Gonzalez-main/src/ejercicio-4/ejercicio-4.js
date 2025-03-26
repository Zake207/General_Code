"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterScanner = exports.Scanner = exports.Printer = void 0;
/**
 * Class representing a printer.
 * Implements the Printable interface.
 */
class Printer {
    /**
     * Prints a message to the console.
     */
    print() {
        return "Printing...";
    }
}
exports.Printer = Printer;
/**
 * Class representing a scanner.
 * Implements the Scannable interface.
 */
class Scanner {
    /**
     * Scans a message to the console.
     */
    scan() {
        return "Scanning...";
    }
}
exports.Scanner = Scanner;
/**
 * Class representing a device that can both print and scan.
 * Implements both Printable and Scannable interfaces.
 */
class PrinterScanner {
    /**
     * Prints a message to the console.
     */
    print() {
        return "Printing...";
    }
    /**
     * Scans a message to the console.
     */
    scan() {
        return "Scanning...";
    }
}
exports.PrinterScanner = PrinterScanner;
// // Client code
// /**
//  * Creates an instance of Printer and calls its print method.
//  * @param printer - An instance of Printer.
//  */
// const printer = new Printer();
// printer.print();
// /**
//  * Creates an instance of Scanner and calls its scan method.
//  * @param scanner - An instance of Scanner.
//  */
// const scanner = new Scanner();
// scanner.scan();
// /**
//  * Creates an instance of PrinterScanner and calls its print and scan methods.
//  * @param printerScanner - An instance of PrinterScanner.
//  */
// const printerScanner = new PrinterScanner();
// printerScanner.print();
// printerScanner.scan();
