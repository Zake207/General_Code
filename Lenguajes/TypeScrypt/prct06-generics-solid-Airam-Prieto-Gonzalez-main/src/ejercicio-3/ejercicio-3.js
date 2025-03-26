"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManagerV2 = exports.FileManagerV1 = void 0;
const fs = __importStar(require("fs"));
/**
 * MODIFICACIÓN DEL CODIGO:
 * Dado que no cumple el primer principio Single Responsability Principle
 * el código a continuación crea una clase adicional que extiende la funcionalidad de lectura
 * añadiendo la escritura
 */
/**
 * Class that implements a file manager with read
 */
class FileManagerV1 {
    /**
     * Constructor of the class
     * @param filePath Path of the file
     */
    constructor(filePath) {
        this.filePath = filePath;
    }
    /**
     * Method that reads the content of the file
     * @returns Content of the file
     */
    readFile() {
        try {
            const content = fs.readFileSync(this.filePath, "utf-8");
            return content;
        }
        catch (error) {
            console.error("Error al leer el archivo");
            return "";
        }
    }
}
exports.FileManagerV1 = FileManagerV1;
/**
 * Class that extends the functionality of the file manager
 */
class FileManagerV2 extends FileManagerV1 {
    /**
     * Constructor of the class
     * @param filePath Path of the file
     */
    constructor(filePath) {
        super(filePath);
    }
    /**
     * Method that writes the content into the file
     * @param data Data to be written
     */
    writeFile(data) {
        try {
            fs.writeFileSync(this.filePath, data, "utf-8");
            console.log("Archivo escrito exitosamente.");
        }
        catch (error) {
            console.error("Error al escribir en el archivo");
        }
    }
}
exports.FileManagerV2 = FileManagerV2;
