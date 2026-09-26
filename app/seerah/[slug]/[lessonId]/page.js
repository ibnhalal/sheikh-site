"use client";

import { useParams } from "next/navigation";
import SingleLesson from "@/components/SingleLesson";
import { getSeerahBook, seerahCategory } from "@/data/seerah";

const indexLabel = {
  ar: "الرجوع لقائمة الدروس",
  en: "Back to Lessons",
  am: "ወደ ትምህርቶች ተመለስ",
};

export default function SeerahLessonPage() {
  const { slug, lessonId } = useParams();
  const book = getSeerahBook(slug);

  return (
    <SingleLesson
      book={book}
      lessonIdParam={lessonId}
      basePath={`/seerah/${slug}`}
      indexLabel={indexLabel}
      color={seerahCategory.color}
      telegram={seerahCategory.telegram}
    />
  );
}