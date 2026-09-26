"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getLanguageBook, languageCategory } from "@/data/language";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function LanguageLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getLanguageBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/language/${slug}`}
      indexLabel={indexLabel}
      color={languageCategory.color}
      telegram={languageCategory.telegram}
    />
  );
}
