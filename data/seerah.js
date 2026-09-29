export const seerahCategory = {
  title: {
    ar: "قسم السيرة النبوية والتاريخ",
    en: "Prophetic Biography & History",
    am: "የሲራ ክፍል",
  },
  color: "#b45309",
  colorDark: "#d97706",
  telegram: "https://t.me/SheikhMuhammedZainAdam",
};

export const seerahBooks = [
  {
    slug: "raheeq",
    title: {
      ar: "الرحيق المختوم",
      en: "Ar-Raheeq Al-Makhtum",
      am: "አር-ራሒቅ አል-መኽቱም",
    },
    author: {
      ar: "صفي الرحمن المباركفوري",
      en: "Safi-ur-Rahman al-Mubarakpuri",
      am: "ሶፊዩራህማን አል-ሙባረክፉሪ",
    },
    fullTitle: {
      ar: "شرح الرحيق المختوم",
      en: "Explanation of Ar-Raheeq Al-Makhtum",
      am: "የአር-ራሒቅ አል-መኽቱም ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ صفي الرحمن المباركفوري - شروحات فضيلة الشيخ محمد زين",
      en: "By Safi-ur-Rahman al-Mubarakpuri - Lectures by Sheikh Mohammed Zayn",
      am: "በሶፊዩራህማን አል-ሙባረክፉሪ - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب الرحيق المختوم في السيرة النبوية لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Ar-Raheeq Al-Makhtum by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    total: 108,
    // pdfUrl: "/pdf/seerah-raheeq.pdf", // ⚠️ معطّل مؤقتاً: الملف غير موجود في public/pdf
    numbering: "padded2",
    // ⚠️ عدّل معرّف الأرشيف (الـ Item identifier) واسم الملف ليطابقا
    // بالضبط ما رفعته على archive.org، بنفس الطريقة التي فعلناها في
    // aqeedah.js / language.js
    buildUrl: (i) =>
      `https://archive.org/download/REPLACE_WITH_YOUR_ITEM_ID/${encodeURIComponent(
        `${String(i).padStart(2, "0")} الرحيق المختوم.mp3`
      )}`,
  },
  {
    slug: "daaim",
    title: {
      ar: "دعائم منهاج النبوة",
      en: "Da'aim Minhaj An-Nubuwwah",
      am: "ደዓኢም ሚንሃጅ አን-ኑቡውዋ",
    },
    author: {
      ar: "محمد بن سعيد رسلان",
      en: "Muhammad bin Sa'eed Raslan",
      am: "ሙሐመድ ቢን ሰዒድ ረስላን",
    },
    fullTitle: {
      ar: "شرح دعائم منهاج النبوة",
      en: "Explanation of Da'aim Minhaj An-Nubuwwah",
      am: "የደዓኢም ሚንሃጅ አን-ኑቡውዋ ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد بن سعيد رسلان - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Muhammad bin Sa'eed Raslan - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ሙሐመድ ቢን ሰዒድ ረስላን - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب دعائم منهاج النبوة لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Da'aim Minhaj An-Nubuwwah by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    total: 118,
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Deaem/T${i}.mp3`,
  },
];

export function getSeerahBook(slug) {
  return seerahBooks.find((b) => b.slug === slug);
}