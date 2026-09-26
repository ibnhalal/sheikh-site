export const tafseerCategory = {
  title: { ar: "قسم التفسير", en: "Tafsir Section", am: "የተፍሲር ክፍል" },
  color: "#0d9488",
  colorDark: "#14b8a6",
  telegram: "https://t.me/SheikhMuhammedZainAdam",
};

export const tafseerBooks = [
  {
    slug: "osoul",
    title: {
      ar: "أصول في التفسير",
      en: "Principles of Tafsir",
      am: "የተፍሲር መሠረቶች",
    },
    author: {
      ar: "الشيخ ابن عثيمين",
      en: "Ibn Uthaymeen",
      am: "ኢብኑ ዑሰይሚን",
    },
    fullTitle: {
      ar: "شرح كتاب أصول في التفسير",
      en: "Explanation of Osoul fee Al-Tafsir",
      am: "ኡሱል ፊ ተፍሲር ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد بن صالح العثيمين - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Ibn Uthaymeen - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ኢብኑ ዑሰይሚን - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب أصول في التفسير لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Osoul fee Al-Tafsir by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ የኡሱል ፊ ተፍሲር ትምህርቶች በድምጽ።",
    },
    total: 11,
    pdfUrl: "/pdf/tafseer-osoul.pdf",
    buildUrl: (i) =>
      `https://archive.org/download/osoul-1_202604_202605/${encodeURIComponent(
        `osoul-1 (${i}).mp3`
      )}`,
  },
  {
    slug: "qawaid",
    title: {
      ar: "القواعد الحسان في تفسير القرآن",
      en: "Al-Qawa'id al-Hisan",
      am: "አል-ቀዋኢድ አል-ሂሳን",
    },
    author: {
      ar: "الشيخ العلامة السعدي",
      en: "Al-Sa'di",
      am: "አል-ሰዕዲ",
    },
    fullTitle: {
      ar: "شرح القواعد الحسان في تفسير القرآن",
      en: "Explanation of Al-Qawa'id al-Hisan",
      am: "አል-ቀዋኢድ አል-ሂሳን ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ عبد الرحمن بن ناصر السعدي - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Abdur-Rahman as-Sa'di - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ አብዱራህማን አስ-ሰዕዲ - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب القواعد الحسان في تفسير القرآن لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Al-Qawa'id al-Hisan by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ የአል-ቀዋኢድ አል-ሂሳን ትምህርቶች በድምጽ።",
    },
    total: 53,
    pdfUrl: "/pdf/tafseer-qawaid.pdf",
    buildUrl: (i) =>
      `https://archive.org/download/qawaid-8_202605/${encodeURIComponent(
        `qawaid (${i}).mp3`
      )}`,
  },
  {
    slug: "muqedima",
    title: {
      ar: "شرح مقدمة التفسير",
      en: "Tafsir Introduction",
      am: "የተፍሲር መግቢያ",
    },
    author: {
      ar: "شيخ الإسلام ابن تيمية",
      en: "Ibn Taymiyyah",
      am: "ኢብኑ ተይሚያ",
    },
    fullTitle: {
      ar: "شرح مقدمة أصول التفسير",
      en: "Explanation of the Introduction to Tafsir",
      am: "የተፍሲር መግቢያ ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف شيخ الإسلام ابن تيمية رحمه الله - شروحات فضيلة الشيخ محمد زين",
      en: "By Shaykh al-Islam Ibn Taymiyyah - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ኢብኑ ተይሚያ - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات مقدمة التفسير لشيخ الإسلام ابن تيمية لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining the Introduction to Tafsir by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ የተፍሲር መግቢያ ትምህርቶች በድምጽ።",
    },
    total: 44,
    pdfUrl: "/pdf/tafseer-muqedima.pdf",
    buildUrl: (i) =>
      `https://archive.org/download/muqedima-32/${encodeURIComponent(
        `muqedima (${i}).mp3`
      )}`,
  },
];

export function getTafseerBook(slug) {
  return tafseerBooks.find((b) => b.slug === slug);
}
