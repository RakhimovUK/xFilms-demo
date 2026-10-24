import assert from "node:assert/strict";
import test from "node:test";
import {
  backupFileName,
  brand,
  databaseFileName,
  readBrand,
} from "../src/bot/brand.ts";
import { buildWelcomeMessage } from "../src/bot/welcome-message.ts";

test("brand defaults to xFilms with the clapperboard header", () => {
  assert.deepEqual(readBrand({}), {
    name: "xFilms",
    slug: "xfilms",
    headerEmoji: "🎬",
  });
});

test("brand reads BOT_BRAND and normalizes BOT_SLUG from the environment", () => {
  assert.deepEqual(
    readBrand({ BOT_BRAND: "  xFilms Plus  ", BOT_SLUG: "  XFilms-Plus  " }),
    {
      name: "xFilms Plus",
      slug: "xfilms-plus",
      headerEmoji: "🎬",
    },
  );
});

test("exported brand reflects the process environment", () => {
  assert.equal(brand.name, process.env.BOT_BRAND?.trim() || "xFilms");
  assert.equal(brand.slug, process.env.BOT_SLUG?.trim().toLowerCase() || "xfilms");
});

test("start welcome message uses the active brand", () => {
  assert.ok(buildWelcomeMessage(false).includes(brand.name));
});

test("database and backup filenames use the active slug", () => {
  assert.equal(databaseFileName(), `${brand.slug}.sqlite`);
  assert.equal(backupFileName("2026-10-24-12-30"), `${brand.slug}-2026-10-24-12-30.sqlite`);
});
