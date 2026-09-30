export const languageCategory = {
  title: { ar: "قسم اللغة العربية", en: "Arabic Language Section", am: "የአረብኛ ቋንቋ ክፍል" },
  color: "#2980b9",
  colorDark: "#3498db",
  telegram: "https://t.me/SheikhMuhammedZainAdam",
};

const buildUrl = (slug, i) => `https://archive.org/download/osoul-5/${slug}%20(${i}).mp3`;

export const languageBooks = [
  {
    slug: "mulha",
    title: { ar: "ملحة الإعراب", en: "Mulhat al-Irab", am: "ሙልሃቱል ኢዕራብ" },
    author: { ar: "الإمام الحريري", en: "Imam Al-Hariri", am: "ኢማም አል-ሀሪሪ" },
    total: 72,
      buildUrl: (i) =>
    `https://archive.org/download/mulha-49_20260922/a/${encodeURIComponent(`mulha (${i}).mp3`)}`,
},
  {
    slug: "niqab",
    title: {
      ar: "كشف النقاب عن ملحة الإعراب",
      en: "Kashf al-Niqab",
      am: "ከሽፉል ኒቃብ",
    },
    author: { ar: "عبد الله بن أحمد الفقيه", en: "Abdullah Al-Faqih", am: "አብዱላህ አል-ፈቂህ" },
    total: 82,
  },
  {
    slug: "fawakih",
    title: {
      ar: "الفواكه الجنية على المتممات الآجرومية",
      en: "Al-Fawakih al-Janiyah",
      am: "አል-ፈዋኪህ አል-ጀኒያ",
    },
    author: { ar: "عبد الله بن أحمد الفقيه", en: "Abdullah Al-Faqih", am: "አብዱላህ አል-ፈቂህ" },
    total: 152,
buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Fewakih/S${i}.mp3`,
  },
  {
    slug: "aqeel",
    title: {
      ar: "شرح ابن عقيل على ألفية ابن مالك",
      en: "Ibn Aqeel on Alfiyyah",
      am: "ኢብኑ ዓቂል",
    },
    author: { ar: "ابن عقيل", en: "Ibn Aqeel", am: "ኢብኑ ዓቂል" },
    total: 216,
  },
  {
    slug: "ajrumiya",
    title: { ar: "متن الأجرومية", en: "Al-Ajrumiyyah", am: "አል-አጅሩሚያ" },
    author: { ar: "ابن آجروم الصنهاجي", en: "Ibn Ajrum", am: "ኢብኑ አጅሩም" },
    pdfUrl: "/pdf/language-ajrumiya.pdf",
    total: 24,
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Ajrum/M${i}.mp3`,
  },
].map((b) => ({
  ...b,
  buildUrl: b.buildUrl || ((i) => buildUrl(b.slug, i)),
}));
export function getLanguageBook(slug) {
  return languageBooks.find((b) => b.slug === slug);
}
