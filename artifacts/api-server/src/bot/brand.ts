export type BotBrand = {
  name: string;
  slug: string;
  headerEmoji: string;
};

type BrandEnv = { BOT_BRAND?: string; BOT_SLUG?: string };

export function readBrand(env: BrandEnv = process.env): BotBrand {
  return {
    name: env.BOT_BRAND?.trim() || "xFilms",
    slug: env.BOT_SLUG?.trim().toLowerCase() || "xfilms",
    headerEmoji: "🎬",
  };
}

export const brand = readBrand();

export function databaseFileName(): string {
  return `${brand.slug}.sqlite`;
}

export function backupFileName(stamp: string): string {
  return `${brand.slug}-${stamp}.sqlite`;
}
