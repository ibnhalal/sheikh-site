"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getSeerahBook, seerahCategory } from "@/data/seerah";

const backLabel = {
  ar: "الرجوع لقائمة السيرة",
  en: "Back to Seerah Menu",
  am: "ወደ ሲራ ማውጫ ተመለስ",
};

export default function SeerahBookPage() {
  const { slug } = useParams();
  const book = getSeerahBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/seerah/${slug}`}
      backHref="/seerah"
      backLabel={backLabel}
      color={seerahCategory.color}
      telegram={seerahCategory.telegram}
    />
  );
}