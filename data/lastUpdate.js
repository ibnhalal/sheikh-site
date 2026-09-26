export const lastUpdateCategory = {
  title: { ar: "آخر التحديثات", en: "Latest Updates", am: "አዳዲስ ትምህርቶች" },
  color: "#27ae60",
  telegram: "https://t.me/SheikhMohammadZayn",
};

const buildUrl = (slug, i) => `https://archive.org/download/osoul-5/${slug}%20(${i}).mp3`;

export const lastUpdateBooks = [
  {
    slug: "saadi",
    title: { ar: "تفسير السعدي", en: "Tafsir al-Saadi", am: "ተፍሲር አስ-ሰዕዲ" },
    author: {
      ar: "الشيخ عبد الرحمن السعدي",
      en: "Sheikh Abdul Rahman al-Saadi",
      am: "ሸይኽ አብዱራህማን አስ-ሰዕዲ",
    },
    total: 420,
  },
  {
    slug: "riyadh",
    title: { ar: "رياض الصالحين", en: "Riyad as-Salihin", am: "ሪያዱ አስ-ሷሊሂን" },
    author: { ar: "الإمام النووي", en: "Imam al-Nawawi", am: "ኢማም አል-ነወዊ" },
    total: 150,
  },
  {
    slug: "ibnmajah",
    title: { ar: "سنن ابن ماجة", en: "Sunan Ibn Majah", am: "ሱነን ኢብኑ ማጃህ" },
    author: { ar: "الإمام ابن ماجة", en: "Imam Ibn Majah", am: "ኢማም ኢብኑ ማጃህ" },
    total: 180,
  },
  {
    slug: "nasai",
    title: { ar: "سنن النسائي", en: "Sunan al-Nasai", am: "ሱነን አን-ነሳኢ" },
    author: { ar: "الإمام النسائي", en: "Imam al-Nasai", am: "ኢማም አን-ነሳኢ" },
    total: 210,
  },
  {
    slug: "qawl",
    title: {
      ar: "القول المفيد على كتاب التوحيد",
      en: "Al-Qawl al-Mufid",
      am: "አል-ቀውሉል ሙፊድ",
    },
    author: { ar: "الشيخ ابن عثيمين", en: "Sheikh Ibn Uthaymeen", am: "ሸይኽ ኢብኑ ኡሰይሚን" },
    total: 110,
  },
].map((b) => ({ ...b, buildUrl: (i) => buildUrl(b.slug, i) }));

export function getLastUpdateBook(slug) {
  return lastUpdateBooks.find((b) => b.slug === slug);
}
