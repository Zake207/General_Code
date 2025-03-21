import { describe, test, expect } from "vitest";
import * as fs from "fs";
import { FileManagerV2 } from "../src/ejercicio-3/ejercicio-3";

describe("FileManagerV2", () => {
  const filePath = "example.txt";
  let fileManager: FileManagerV2;
  test("should create a new instance of FileManagerV2", () => {
    fileManager = new FileManagerV2(filePath);
    expect(fileManager).toBeInstanceOf(FileManagerV2);
  });

  test("should write the content into the file", () => {
    fileManager.writeFile("Bye, World!");
    const content = fs.readFileSync(filePath, "utf-8");
    expect(content).toBe("Bye, World!");
  });
});
