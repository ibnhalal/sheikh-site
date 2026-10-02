import { tafseerBooks } from "@/data/tafseer";
import { aqeedahBooks } from "@/data/aqeedah";
import { hadithBooks } from "@/data/hadith";
import { fiqhBooks } from "@/data/fiqh";
import { languageBooks } from "@/data/language";
import { seerahBooks } from "@/data/seerah";
import { lastUpdateBooks } from "@/data/lastUpdate";

const BASE_URL = "https://muhammedzain.com";

export default function sitemap() {
  const staticPages = [
    "", "tafseer", "aqeedah", "fiqh", "hadith", "seerah", "language", "last-update", "help",
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
  }));

  const bookPages = [
    ...tafseerBooks.map((b) => `tafseer/${b.slug}`),
    ...aqeedahBooks.map((b) => `aqeedah/${b.slug}`),
    ...hadithBooks.map((b) => `hadith/${b.slug}`),
    ...fiqhBooks.map((b) => `fiqh/${b.slug}`),
    ...languageBooks.map((b) => `language/${b.slug}`),
    ...lastUpdateBooks.map((b) => `last-update/${b.slug}`),
    ...seerahBooks.map((b) => `seerah/${b.slug}`),
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...bookPages];
}