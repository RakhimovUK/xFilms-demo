import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testFile = fileURLToPath(import.meta.url);
const sourceRoot = path.resolve(path.dirname(testFile), "../src");
const legacyName = ["med", "flix"].join("");

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(filePath);
    return entry.isFile() && filePath !== testFile ? [filePath] : [];
  });
}

test("source tree contains no legacy brand references", () => {
  const matches = sourceFiles(sourceRoot)
    .filter((filePath) =>
      readFileSync(filePath, "utf8").toLowerCase().includes(legacyName),
    )
    .map((filePath) => path.relative(sourceRoot, filePath));

  assert.deepEqual(matches, []);
});
