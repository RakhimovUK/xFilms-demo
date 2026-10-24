import assert from "node:assert/strict";
import { mkdtempSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

const directory = mkdtempSync(path.join(tmpdir(), "xfilms-db-path-"));
process.env.DATABASE_DIR = directory;
delete process.env.DATABASE_PATH;
process.env.BOT_SLUG = "xfilms";

const db = await import("../src/bot/database.ts");

test("default SQLite filename uses BOT_SLUG inside DATABASE_DIR", () => {
  assert.ok(readdirSync(directory).includes("xfilms.sqlite"));
  db.getDatabase().close();
});
