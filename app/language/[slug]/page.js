"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getLanguageBook, languageCategory } from "@/data/language";

const backLabel = {
  ar: "الرجوع لقائمة اللغة العربية",
  en: "Back to Language Menu",
  am: "ወደ ቋንቋ ማውጫ ተመለስ",
};

export default function LanguageBookPage() {
  const { slug } = useParams();
  const book = getLanguageBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/language/${slug}`}
      backHref="/language"
      backLabel={backLabel}
      color={languageCategory.color}
      telegram={languageCategory.telegram}
    />
  );
}
