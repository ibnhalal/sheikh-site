"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getHadithBook, hadithCategory } from "@/data/hadith";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function HadithLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getHadithBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/hadith/${slug}`}
      indexLabel={indexLabel}
      color={hadithCategory.color}
      telegram={hadithCategory.telegram}
    />
  );
}
