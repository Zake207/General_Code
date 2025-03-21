import * as fs from "fs";

/**
 * MODIFICACIÓN DEL CODIGO:
 * Dado que no cumple el primer principio Single Responsability Principle
 * el código a continuación crea una clase adicional que extiende la funcionalidad de lectura
 * añadiendo la escritura
 */

/**
 * Class that implements a file manager with read
 */
export class FileManagerV1 {
  /**
   * Constructor of the class
   * @param filePath Path of the file
   */
  constructor(protected filePath: string) {}

  /**
   * Method that reads the content of the file
   * @returns Content of the file
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

/**
 * Class that extends the functionality of the file manager
 */
export class FileManagerV2 extends FileManagerV1 {
  /**
   * Constructor of the class
   * @param filePath Path of the file
   */
  constructor(filePath: string) {
    super(filePath);
  }

  /**
   * Method that writes the content into the file
   * @param data Data to be written
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}
