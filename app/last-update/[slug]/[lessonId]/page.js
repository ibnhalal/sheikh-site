"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getLastUpdateBook, lastUpdateCategory } from "@/data/lastUpdate";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function LastUpdateLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getLastUpdateBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/last-update/${slug}`}
      indexLabel={indexLabel}
      color={lastUpdateCategory.color}
      telegram={lastUpdateCategory.telegram}
    />
  );
}
