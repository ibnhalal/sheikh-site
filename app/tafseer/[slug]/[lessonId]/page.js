"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getTafseerBook, tafseerCategory } from "@/data/tafseer";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function TafseerLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getTafseerBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/tafseer/${slug}`}
      indexLabel={indexLabel}
      color={tafseerCategory.color}
      telegram={tafseerCategory.telegram}
    />
  );
}
