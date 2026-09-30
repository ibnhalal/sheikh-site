export const fiqhCategory = {
  title: { ar: "قسم الفقه", en: "Fiqh Section", am: "የፊቅህ ክፍል" },
  color: "#27ae60",
  colorDark: "#2ecc71",
  telegram: "https://t.me/SheikhMohammadZayn",
};

const buildUrl = (slug, i) => `https://archive.org/download/osoul-5/${slug}%20(${i}).mp3`;

export const fiqhBooks = [
  {
    slug: "siyam",
    title: {
      ar: "مذكرة في أحكام الصيام",
      en: "Memorandum on Fasting Rules",
      am: "የጾም ህግጋት ማስታወሻ",
    },
    author: {
      ar: "الشيخ محمد بن عبد الوهاب الوصابي",
      en: "Sheikh Al-Wasabi",
      am: "ሸይኽ አል-ወሳቢ",
    },
    total: 9,
buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Siyam/U${i}.mp3`,
  },
].map((b) => ({
  ...b,
  buildUrl: b.buildUrl || ((i) => buildUrl(b.slug, i)),
}));

export function getFiqhBook(slug) {
  return fiqhBooks.find((b) => b.slug === slug);
}
