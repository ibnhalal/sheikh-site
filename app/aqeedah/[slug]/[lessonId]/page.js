"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getAqeedahBook, aqeedahCategory } from "@/data/aqeedah";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function AqeedahLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getAqeedahBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/aqeedah/${slug}`}
      indexLabel={indexLabel}
      color={aqeedahCategory.color}
      telegram={aqeedahCategory.telegram}
    />
  );
}
