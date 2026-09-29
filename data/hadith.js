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
    total: 17,

     buildUrl: (i) =>
    `https://archive.org/download/15_20260918_202609/${encodeURIComponent(
      `${String(i).padStart(2, "0")} مصطلح الحديث لابن عثيمين.mp3`
    )}`,
  },
  {
    slug: "nawawi",
    title: { ar: "الأربعون النووية", en: "The Forty Hadith", am: "አርበዑን አል-ነወዊያ" },
    author: { ar: "الإمام النووي", en: "Imam al-Nawawi", am: "ኢማም አል-ነወዊ" },
    total: 5,
  },
].map((b) => ({ ...b, buildUrl: b.buildUrl || ((i) => buildUrl(b.slug, i)) }));
export function getHadithBook(slug) {
  return hadithBooks.find((b) => b.slug === slug);
}
