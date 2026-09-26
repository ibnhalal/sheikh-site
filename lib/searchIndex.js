import { categories } from "@/data/home";
import { tafseerBooks, tafseerCategory } from "@/data/tafseer";
import { aqeedahBooks, aqeedahCategory } from "@/data/aqeedah";
import { hadithBooks, hadithCategory } from "@/data/hadith";
import { fiqhBooks, fiqhCategory } from "@/data/fiqh";
import { languageBooks, languageCategory } from "@/data/language";
import { seerahBooks } from "@/data/seerah";

// Builds one flat, language-aware index of every searchable item on the
// whole site: the 6 main sections + every single book in every section.
// Each entry carries an href so search results can jump straight to the
// right page instead of just filtering the homepage cards.
function bookEntries(books, section, sectionColor, sectionLabel) {
  return books.map((b) => ({
    id: `${section}-${b.slug}`,
    kind: "book",
    href: `/${section}/${b.slug}`,
    title: b.title,
    subtitle: b.author,
    section: sectionLabel,
    color: sectionColor,
    icon: "fa-solid fa-headphones",
  }));
}

export function getSearchIndex() {
  const categoryEntries = categories.map((c) => ({
    id: `cat-${c.href}`,
    kind: "category",
    href: c.href,
    title: c.title,
    subtitle: c.desc,
    section: { ar: "قسم", en: "Section", am: "ክፍል" },
    color: "var(--primary)",
    icon: c.icon,
  }));

  const seerahEntries = seerahBooks.map((b) => ({
    id: `seerah-${b.slug}`,
    kind: "book",
    href: `/seerah/${b.slug}`,
    title: b.title,
    subtitle: b.author,
    section: { ar: "السيرة النبوية", en: "Seerah", am: "ሲራ" },
    color: "#b45309",
    icon: "fa-solid fa-kaaba",
  }));

  return [
    ...categoryEntries,
    ...bookEntries(
      tafseerBooks,
      "tafseer",
      tafseerCategory.color,
      { ar: "التفسير", en: "Tafsir", am: "ተፍሲር" }
    ),
    ...bookEntries(
      aqeedahBooks,
      "aqeedah",
      aqeedahCategory.color,
      { ar: "العقيدة", en: "Aqeedah", am: "አቂዳ" }
    ),
    ...bookEntries(
      hadithBooks,
      "hadith",
      hadithCategory.color,
      { ar: "الحديث", en: "Hadith", am: "ሀዲስ" }
    ),
    ...bookEntries(
      fiqhBooks,
      "fiqh",
      fiqhCategory.color,
      { ar: "الفقه", en: "Fiqh", am: "ፊቅህ" }
    ),
    ...bookEntries(
      languageBooks,
      "language",
      languageCategory.color,
      { ar: "اللغة العربية", en: "Arabic Language", am: "አረብኛ ቋንቋ" }
    ),
    ...seerahEntries,
  ];
}

// Matches against ALL three languages at once (so typing an Arabic title
// still finds it even if the UI is currently in English, etc).
export function searchIndex(index, rawQuery) {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  const safe = (v) => (typeof v === "string" ? v : "");
  return index.filter((entry) => {
    const haystack = [
      safe(entry.title?.ar),
      safe(entry.title?.en),
      safe(entry.title?.am),
      safe(entry.subtitle?.ar),
      safe(entry.subtitle?.en),
      safe(entry.subtitle?.am),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
