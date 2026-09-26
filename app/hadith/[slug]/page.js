"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getHadithBook, hadithCategory } from "@/data/hadith";

const backLabel = {
  ar: "الرجوع لقائمة الحديث",
  en: "Back to Hadith Menu",
  am: "ወደ ሀዲስ ማውጫ ተመለስ",
};

export default function HadithBookPage() {
  const { slug } = useParams();
  const book = getHadithBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/hadith/${slug}`}
      backHref="/hadith"
      backLabel={backLabel}
      color={hadithCategory.color}
      telegram={hadithCategory.telegram}
    />
  );
}
