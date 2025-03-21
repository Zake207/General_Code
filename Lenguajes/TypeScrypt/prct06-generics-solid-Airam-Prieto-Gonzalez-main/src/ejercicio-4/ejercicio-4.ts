/**
 * Interface representing a printable entity.
 */
interface Printable {
  /**
   * Prints the entity.
   */
  print(): void;
}

/**
 * Interface representing a scannable entity.
 */
interface Scannable {
  /**
   * Scans the entity.
   */
  scan(): void;
}

/**
 * Class representing a printer.
 * Implements the Printable interface.
 */
export class Printer implements Printable {
  /**
   * Prints a message to the console.
   */
  print(): string {
    return "Printing...";
  }
}

/**
 * Class representing a scanner.
 * Implements the Scannable interface.
 */
export class Scanner implements Scannable {
  /**
   * Scans a message to the console.
   */
  scan(): string {
    return "Scanning...";
  }
}

/**
 * Class representing a device that can both print and scan.
 * Implements both Printable and Scannable interfaces.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Prints a message to the console.
   */
  print(): string {
    return "Printing...";
  }

  /**
   * Scans a message to the console.
   */
  scan(): string {
    return "Scanning...";
  }
}

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
