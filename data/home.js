export const homeText = {
  ar: {
    heroDesc:
      "المنصة العلمية الشاملة لنشر الشروحات، الدروس والمحاضرات المبنية على الكتاب والسنة بفهم سلف الأمة في شتى العلوم الشرعية واللغوية.",
    searchPlaceholder: "ابحث عن قسم أو كتاب أو شرح...",
    secCategories: "الأقسام العلمية الكبرى",
    secReadingNow: "يُقرأ حالياً في الدروس",
    readingNow: "🔴 يقرأ حالياً",
    secLatestAdded: "آخر المواد المضافة حديثاً",
    searchResults: "نتائج البحث",
    noResults: "لا توجد نتائج مطابقة لبحثك. جرّب كلمة أخرى.",
    resultsFor: "نتيجة لـ",
    newBadge: "جديد",
    telegram: "قناة البث المباشر والدروس الرسمية",
  },
  en: {
    heroDesc:
      "The comprehensive scientific platform for publishing explanations, lessons and lectures based on the Qur'an and Sunnah with the understanding of the Salaf across the Islamic and linguistic sciences.",
    searchPlaceholder: "Search for a section, book or explanation...",
    secCategories: "Major Scientific Sections",
    secReadingNow: "Currently Being Read in Lessons",
    readingNow: "🔴 LIVE",
    secLatestAdded: "Recently Added Material",
    searchResults: "Search Results",
    noResults: "No results match your search. Try another word.",
    resultsFor: "results for",
    newBadge: "New",
    telegram: "Official Live Stream & Lessons Channel",
  },
  am: {
    heroDesc:
      "በቁርአንና በሱና ላይ የተመሰረቱ የሸሪዓዊና የቋንቋ ሳይንሶች ትምህርቶችና ማብራሪያዎች የሚለቀቁበት ሁሉን አቀፍ የሳይንስ መድረክ።",
    searchPlaceholder: "ይፈልጉ...",
    secCategories: "ዋና ዋና የሳይንስ ክፍሎች",
    secReadingNow: "አሁን እየተቀራ ያለ",
    readingNow: "🔴 በቀጥታ ስርጭት",
    secLatestAdded: "በቅርቡ የተጨመሩ",
    searchResults: "የፍለጋ ውጤቶች",
    noResults: "ምንም ውጤት አልተገኘም። ሌላ ቃል ይሞክሩ።",
    resultsFor: "ውጤቶች ለ",
    newBadge: "አዲስ",
    telegram: "የቀጥታ ስርጭት እና የትምህርት ቴሌግራም ቻናል",
  },
};

export const categories = [
  {
    href: "/tafseer",
    icon: "fa-solid fa-book-quran",
    title: { ar: "قسم التفسير", en: "Tafsir Section", am: "የተፍሲር ክፍል" },
    desc: {
      ar: "تفسير القرآن الكريم وعلوم نزوله    .",
      en: "Interpretation of the Noble Qur'an, sciences of revelation and Al-Qawa'id Al-Hisan.",
      am: "የቁርዓን ትርጓሜ፣  ትምህርት እና ማብራሪያ።",
    },
  },
  {
    href: "/aqeedah",
    icon: "fa-solid fa-mosque",
    title: { ar: "قسم العقيدة والتوحيد", en: "Aqeedah & Tawheed", am: "የአቂዳ ክፍል" },
    desc: {
      ar: "تقرير أصول الإيمان والتوحيد والردود على المبتدعة على منهج السلف.",
      en: "Establishing core faith, monotheism, and principles of orthodox Islamic creed.",
      am: "የእምነት መሠረቶች፣ የተውሂድ ማረጋገጫ እና ትምህርቶች።",
    },
  },
  {
    href: "/fiqh",
    icon: "fa-solid fa-scale-balanced",
    title: { ar: "قسم الفقه ", en: "Fiqh ", am: "የፊቅህ ክፍል" },
    desc: {
      ar: "شرح الأحكام الشرعية العملية في العبادات، ، .",
      en: "Explanation of Islamic practical rulings on worship,  .",
      am: "   የፊቅህ  ።",
    },
  },
  {
    href: "/hadith",
    icon: "fa-solid fa-scroll",
    title: { ar: "قسم الحديث والمصطلح", en: "Hadith & Terminology", am: "የሀዲስ ክፍል" },
    desc: {
      ar: "شرح الأحاديث النبوية، متون الأثر، وعلوم المصطلح والأسانيد.",
      en: "Explanations of prophetic Hadiths, narrations, chains, and terminology.",
      am: "የነቢዩ ሐዲሶች ማብራሪያ እና የሐዲስ ደንቦች።",
    },
  },
  {
    href: "/seerah",
    icon: "fa-solid fa-kaaba",
    title: { ar: "قسم السيرة النبوية والتاريخ", en: "Prophetic Biography", am: "የሲራ ክፍል" },
    desc: {
      ar: "دراسة أحداث العهد النبوي، مغازي الرسول ﷺ، والتاريخ الإسلامي.",
      en: "Study of the life of Prophet Muhammad ﷺ and Islamic history.",
      am: "የነቢዩ ሙሐመድ ﷺ የሕይወት ታሪክ ጥናት።",
    },
  },
  {
    href: "/language",
    icon: "fa-solid fa-pen-nib",
    title: { ar: "قسم اللغة العربية", en: "Arabic Language Section", am: "የአረብኛ ቋንቋ ክፍል" },
    desc: {
      ar: "دروس النحو، الصرف، البلاغة، وقواعد الآجرومية وعلوم اللسان العربي.",
      en: "Lessons in Grammar, Morphology, Rhetoric, and Arabic linguistic sciences.",
      am: "የአረብኛ ሰዋሰውና የቋንቋ ሳይንስ ትምህርቶች።",
    },
  },
];

// "يُقرأ حالياً" books — link to their real lesson pages
export const readingNow = [
  // {
  //   href: "/tafseer/osoul",
  //   title: { ar: "تفسير أصول في التفسير", en: "Osoul fee Al-Tafsir", am: "ኡሱል ፊ ተፍሲር" },
  //   desc: {
  //     ar: "دروس التفسير اليومية | بث مباشر",
  //     en: "Daily Tafsir lessons | Live",
  //     am: "ዕለታዊ የተፍሲር ትምህርት | በቀጥታ",
  //   },
  // },
  // {
  //   href: "/hadith/bukhari",
  //   title: { ar: "صحيح البخاري", en: "Sahih al-Bukhari", am: "ሶሒህ አል-ቡኻሪ" },
  //   desc: {
  //     ar: "شرح أحاديث الإخلاص والنية | درس يومي",
  //     en: "Explanation of Hadiths on Sincerity | Daily lesson",
  //     am: "ዕለታዊ ትምህርት",
  //   },
  // },
  // {
  //   href: "/hadith/nawawi",
  //   title: { ar: "الأربعون النووية", en: "The Forty Hadith", am: "አርበዑን አል-ነወዊያ" },
  //   desc: {
  //     ar: "شرح كتاب الطهارة والسنن | درس يومي",
  //     en: "Daily lesson",
  //     am: "ዕለታዊ ትምህርት",
  //   },
  // },
  // {
  //   href: "/aqeedah/osoul1",
  //   title: {
  //     ar: "القول المفيد على كتاب التوحيد",
  //     en: "Al-Qawl al-Mufid",
  //     am: "አል-ቀውሉል ሙፊድ",
  //   },
  //   desc: {
  //     ar: "شرح أبواب التوحيد والإيمان | درس يومي",
  //     en: "Explanation of chapters of Tawheed | Daily lesson",
  //     am: "ዕለታዊ ትምህርት",
  //   },
  // },

  {
    href: "https://t.me/SheikhMuhammedZainAdam/16930",
    slug: "riyadh",
    title: { ar: "رياض الصالحين", en: "Riyad as-Salihin", am: "ሪያዱ አስ-ሷሊሂን" },
    author: { ar: "الإمام النووي", en: "Imam al-Nawawi", am: "ኢማም አል-ነወዊ" },
     desc: {
      ar: "إضافة تسجيل درس اليوم والصوتيات",
      en: "Today's lesson recording added",
      am: "የዛሬው ትምህርት ተጨምሯል",
    },
  },
];

export const latestAdded = [

  {
    href: "https://t.me/SheikhMuhammedZainAdam/16930",
    slug: "riyadh",
    title: { ar: "رياض الصالحين", en: "Riyad as-Salihin", am: "ሪያዱ አስ-ሷሊሂን" },
    author: { ar: "الإمام النووي", en: "Imam al-Nawawi", am: "ኢማም አል-ነወዊ" },
     desc: {
      ar: "إضافة تسجيل درس اليوم والصوتيات",
      en: "Today's lesson recording added",
      am: "የዛሬው ትምህርት ተጨምሯል",
    },
  },]
