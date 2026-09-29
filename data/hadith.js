export const hadithCategory = {
  title: { ar: "قسم الحديث الشريف", en: "Hadith Department", am: "የሀዲስ ትምህርቶች" },
  color: "#c0392b",
  telegram: "https://t.me/SheikhMuhammedZainAdam",
};

// Pattern used by the original site: archive.org/download/osoul-5/{slug}%20({i}).mp3
const buildUrl = (slug, i) => `https://archive.org/download/osoul-5/${slug}%20(${i}).mp3`;

export const hadithBooks = [
  {
    slug: "abudawood",
    title: { ar: "سنن أبي داود", en: "Sunan Abi Dawood", am: "ሱነን አቢ ዳውድ" },
    author: {
      ar: "الإمام أبو داود السجستاني",
      en: "Imam Abu Dawood",
      am: "ኢማም አቡ ዳውድ",
    },
    total: 332,
  },
  {
    slug: "bulugh",
    title: { ar: "بلوغ المرام", en: "Bulugh al-Maram", am: "ቡሉጉል መራም" },
    author: { ar: "الحافظ ابن حجر العسقلاني", en: "Ibn Hajar al-Asqalani", am: "ኢብኑ ሀጀር" },
    total: 292,
  },
  {
    slug: "mustalah",
    title: { ar: "مصطلح الحديث", en: "Hadith Terminology", am: "ሙስጣለሃል ሀዲስ" },
    author: { ar: "الشيخ ابن عثيمين", en: "Sheikh Ibn Uthaymeen", am: "ሸይኽ ኢብኑ ኡሰይሚን" },
     pdfUrl: "/pdf/hadith.mustalah.pdf",
    total: 15,
buildUrl: (i) =>
  buildUrl: (i) =>
  `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Mistelah/L${i}.mp3`,
},
].map((b) => ({ ...b, buildUrl: b.buildUrl || ((i) => buildUrl(b.slug, i)) }));
export function getHadithBook(slug) {
  return hadithBooks.find((b) => b.slug === slug);
}
