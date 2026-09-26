"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getFiqhBook, fiqhCategory } from "@/data/fiqh";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function FiqhLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getFiqhBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/fiqh/${slug}`}
      indexLabel={indexLabel}
      color={fiqhCategory.color}
      telegram={fiqhCategory.telegram}
    />
  );
}
