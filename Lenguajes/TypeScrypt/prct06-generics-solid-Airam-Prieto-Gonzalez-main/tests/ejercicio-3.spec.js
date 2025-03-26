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
const vitest_1 = require("vitest");
const fs = __importStar(require("fs"));
const ejercicio_3_1 = require("../src/ejercicio-3/ejercicio-3");
(0, vitest_1.describe)("FileManagerV2", () => {
    const filePath = "example.txt";
    let fileManager;
    (0, vitest_1.test)("should create a new instance of FileManagerV2", () => {
        fileManager = new ejercicio_3_1.FileManagerV2(filePath);
        (0, vitest_1.expect)(fileManager).toBeInstanceOf(ejercicio_3_1.FileManagerV2);
    });
    (0, vitest_1.test)("should write the content into the file", () => {
        fileManager.writeFile("Bye, World!");
        const content = fs.readFileSync(filePath, "utf-8");
        (0, vitest_1.expect)(content).toBe("Bye, World!");
    });
});
