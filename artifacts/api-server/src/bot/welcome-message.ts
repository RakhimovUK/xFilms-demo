import { brand } from "./brand.ts";

export function buildWelcomeMessage(isAdmin: boolean): string {
  const lines = [
    `${brand.headerEmoji} ${brand.name} botiga xush kelibsiz.`,
    "",
    "Kino ko‘rish uchun kino kodini yuboring.",
    "Masalan: 101",
  ];

  if (isAdmin) {
    lines.push(
      "",
      "Admin bo‘limi:",
      "1) Kanal postini botga forward qiling",
      "2) /add KOD | Kino nomi — 1-post",
      "3) /addpost KOD | 2 | Kino fayli — qo‘shimcha post",
      "4) /addseries KOD | Serial nomi",
      "5) Har bir serial posti uchun /addpart KOD | FASL | QISM | Nomi",
      "6) /setstart — start videosini o‘rnatish",
      "7) /setstructure POST_LINK — struktura postini sozlash",
      "/delete KOD",
      "/deleteseries KOD",
      "/list",
    );
  }

  return lines.join("\n");
}
