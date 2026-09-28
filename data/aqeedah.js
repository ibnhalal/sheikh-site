export const aqeedahCategory = {
  title: { ar: "قسم العقيدة والتوحيد", en: "Aqeedah & Tawheed", am: "የአቂዳ ክፍል" },
  color: "#7e22ce",
  colorDark: "#a855f7",
  telegram: "https://t.me/SheikhMuhammedZain",
};

export const aqeedahBooks = [
  {
    slug: "droos",
    title: {
      ar: "الدروس المهمة لعامة الأمة",
      en: "Important Lessons for the General Ummah",
      am: "ለአጠቃላይ ኡማ ጠቃሚ ትምህርቶች",
    },
    author: { ar: "الشيخ ابن باز", en: "Ibn Baz", am: "ኢብኑ ባዝ" },
    fullTitle: {
      ar: "شرح الدروس المهمة لعامة الأمة",
      en: "Explanation of Important Lessons for the General Ummah",
      am: "ለአጠቃላይ ኡማ ጠቃሚ ትምህርቶች ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف سماحة الشيخ عبد العزيز بن باز - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Abdul Aziz bin Baz - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ አብዱልዓዚዝ ቢን ባዝ - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب الدروس المهمة لعامة الأمة لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Important Lessons for the General Ummah by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    total: 7,
    telegram: "https://t.me/SheikhMuhammedZain/762",
    pdfUrl: "/pdf/aqeedah-droos.pdf",
    buildUrl: (i) => {
      const padded = String(i).padStart(2, "0");
      return `https://archive.org/download/06_20260607/${encodeURIComponent(
        `${padded} - الدروس المهمة.mp3`
      )}`;
    },
    numbering: "padded2",
  },

  {
    slug: "osoul1",
    title: {
      ar: "شرح الأصول الثلاثة",
      en: "The Three Fundamental Principles",
      am: "ሶስቱ መሠረቶች",
    },
    author: {
      ar: "الشيخ محمد بن عبد الوهاب",
      en: "Ibn Abdul Wahab",
      am: "ኢብኑ አብዱል ወሃብ",
    },
    fullTitle: {
      ar: "شرح الأصول الثلاثة",
      en: "Explanation of The Three Fundamental Principles",
      am: "የሶስቱ መሠረቶች ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد بن عبد الوهاب رحمه الله - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Muhammad bin Abdul Wahhab - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ሙሐመድ ቢን አብዱልወሃብ - በሸይኽ ሙሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب الأصول الثلاثة لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining The Three Fundamental Principles by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
        total: 7,
    pdfUrl: "/pdf/aqeedah-osoul1.pdf",
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Aselasa/D${i}.mp3`,
  },
  {
    slug: "osoul2",
    title: { ar: "أصول السنة", en: "Usool as-Sunnah", am: "የሱና መሠረቶች" },
    author: { ar: "الإمام أحمد", en: "Imam Ahmad", am: "ኢማም አህመድ" },
    fullTitle: {
      ar: "شرح أصول السنة للإمام أحمد",
      en: "Explanation of Usool As-Sunnah",
      am: "የኡሱሉ ሱና ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الإمام أحمد بن حنبل رحمه الله - شروحات فضيلة الشيخ محمد زين",
      en: "By Imam Ahmad bin Hanbal - Lectures by Sheikh Mohammed Zayn",
      am: "በኢማም አሕመድ ቢን ሐንበል - በሸይኽ ሙሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب أصول السنة للإمام أحمد بن حنبل لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Usool As-Sunnah by Sheikh Mohammed Zayn.",
      am: "በሸይኽ ሙሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
      total: 4,
    pdfUrl: "/pdf/aqeedah-osoul2.pdf",
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Assuna/F${i}.mp3`,
  },
  {
    slug: "shubuhat",
    title: { ar: "شرح كشف الشبهات", en: "Kashf Ash-Shubuhat", am: "ከሽፉ ሹቡሃት" },
    author: { ar: "ابن عبد الوهاب", en: "Ibn Abdul Wahab", am: "ኢብኑ አብዱል ወሃብ" },
    fullTitle: {
      ar: "شرح كشف الشبهات",
      en: "Explanation of Kashf Ash-Shubuhat",
      am: "የከሽፉ ሹቡሃት ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد بن عبد الوهاب رحمه الله - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Muhammad bin Abdul Wahhab - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ሙሐመድ ቢን አብዱልወሃብ - በሸይኽ ሙሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب كشف الشبهات لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Kashf Ash-Shubuhat by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    total: 21,
    pdfUrl: "/pdf/aqeedah-shubuhat.pdf",
    buildUrl: (i) => {
      const padded = String(i).padStart(2, "0");
      return `https://archive.org/download/17_20260623/${encodeURIComponent(
        `${padded} - شرح كشف الشبهات.mp3`
      )}`;
    },
    numbering: "padded2",
  },
  {
    slug: "jahiliya",
    title: { ar: "شرح مسائل الجاهلية", en: "Masail al-Jahiliyah", am: "መሳኢል አል-ጃሂሊያ" },
    author: { ar: "ابن عبد الوهاب", en: "Ibn Abdul Wahab", am: "ኢብኑ አብዱል ወሃብ" },
    fullTitle: {
      ar: "شرح مسائل الجاهلية",
      en: "Explanation of Masail al-Jahiliyah",
      am: "የመሳኢል አል-ጃሂሊያ ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد بن عبد الوهاب رحمه الله - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Muhammad bin Abdul Wahhab - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ ሙሐመድ ቢን አብዱልወሃብ - በሸይኽ ሙሐመድ ዘይን የተሰጠ ትም�ህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب مسائل الجاهلية لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Masail al-Jahiliyah by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    // pdfUrl: "/pdf/aqeedah-jahiliya.pdf", // ⚠️ معطّل مؤقتاً: الملف غير موجود في public/pdf — ارفعه ثم أزل التعليق (//) عن هذا السطر
    total: 70,

  buildUrl: (i) => {
    const padded = String(i).padStart(2, "0");

    return `https://archive.org/download/50_20260802/${encodeURIComponent(
      `${padded} - شرح مسائل الجاهلية.mp3`
    )}`;
  },

  numbering: "padded2",
},
  {
    slug: "tahawiya",
    title: { ar: "شرح العقيدة الطحاوية", en: "Al-Aqida al-Tahawiyya", am: "አል-ጣሃዊያ" },
    author: { ar: "الإمام الطحاوي", en: "Imam al-Tahawi", am: "ኢማም አል-ጣሃዊ" },
    total: 119,
    buildUrl: (i) => `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Tehawiya/I${i}.mp3`,
  },
  {
    slug: "ahbash",
    title: { ar: "ضلال جماعة الأحباش", en: "Misguidance of Ahbash", am: "የአህባሽ ጥምመት" },
    author: { ar: "الشيخ محمد زين", en: "Sheikh Mohd Zayn", am: "ሸይኽ መሐመድ ዘይን" },
    fullTitle: {
      ar: "شرح ضلال جماعة الأحباش",
      en: "Explanation of Misguidance of Ahbash",
      am: "የአህባሽ ጥምመት ማብራሪያ",
    },
    authorSub: {
      ar: "تأليف الشيخ محمد زين - شروحات فضيلة الشيخ محمد زين",
      en: "By Sheikh Mohammed Zayn - Lectures by Sheikh Mohammed Zayn",
      am: "በሸይኽ መሐመድ ዘይን - በሸይኽ መሐመድ ዘይን የተሰጠ ትምህርት",
    },
    footerDesc: {
      ar: "شروحات كتاب ضلال جماعة الأحباش لفضيلة الشيخ محمد زين بن آدم بصيغ مسموعة ومباشرة.",
      en: "Audio lectures explaining Misguidance of Ahbash by Sheikh Mohammed Zayn.",
      am: "በሸይኽ መሐመድ ዘይን የተሰጡ ትምህርቶች በድምጽ",
    },
    total: 7,
   // pdfUrl: "/pdf/aqeedah-ahbash.pdf", // ⚠️ معطّل مؤقتاً: الملف غير موجود في public/pdf — ارفعه ثم أزل التعليق (//) عن هذا السطر
  total: 7,
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Ahbash/H${i}.mp3`,
  },
{
    slug: "fath-al-majeed",
    title: {
      ar: "فتح المجيد شرح كتاب التوحيد",
      en: "Fath Al-Majeed Sharh Kitab At-Tawheed",
      am: "ፈትሁል መጂድ የኪታብ አት-ተውሒድ ማብራሪያ",
    },
    author: {
      ar: "الشيخ عبد الرحمن بن حسن آل الشيخ",
      en: "Sheikh Abd al-Rahman ibn Hasan Al ash-Sheikh",
      am: "ሼክ አብዱረህማን እብን ሀሰን አል ሼክ",
    },
    fullTitle: {
      ar: "شرح فتح المجيد شرح كتاب التوحيد",
      en: "Explanation of Fath Al-Majeed Sharh Kitab At-Tawheed",
      am: "የፈትሁል መጂድ የኪታብ አት-ተውሒድ ማብራሪያ",
    },
    authorSub: {
      ar: "شروحات فضيلة الشيخ محمد زين - تأليف الشيخ عبد الرحمن بن حسن آل الشيخ",
      en: "By Sheikh Abd al-Rahman ibn Hasan - Lectures by Sheikh Mohammed Zayn",
      am: "በሼክ አብዱረህማን ኢብን ሀሰን የተፃፈ - በሼክ ሙሐመድ ዘይን የተሰጡ ትምህርቶች",
    },
    footerDesc: {
      ar: "شروحات كتاب فتح المجيد شرح كتاب التوحيد لفضيلة الشيخ محمد زين بن آدم بصيغة مسموعة ومباشرة",
      en: "Audio lectures explaining Fath Al-Majeed Sharh Kitab At-Tawheed by Sheikh Mohammed Zayn.",
      am: "በሼክ ሙሐመድ ዘይን በድምፅ የተሰጡ የፈትሁል መጂድ ኪታብ አት-ተውሒድ ማብራሪያ ትምህርቶች",
    },
    total: 198,
    buildUrl: (i) =>
      `https://pub-41caed108cf6475d88c57e8fe2200972.r2.dev/Feth/K${i}.mp3`,
  },
];

export function getAqeedahBook(slug) {
  return aqeedahBooks.find((b) => b.slug === slug);
}