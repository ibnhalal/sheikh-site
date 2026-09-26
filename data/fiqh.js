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

      total: 9,

    buildUrl: (i) => {
      const padded = String(i).padStart(2, "0");

      return `https://archive.org/download/04_20260923/${encodeURIComponent(
        `${padded}-مذكرة في أحكام الصيام.mp3`
      )}`;
    },
  },
].map((b) => ({
  ...b,
  buildUrl: b.buildUrl || ((i) => buildUrl(b.slug, i)),
}));

export function getFiqhBook(slug) {
  return fiqhBooks.find((b) => b.slug === slug);
}
