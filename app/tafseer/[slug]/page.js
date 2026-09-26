"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getTafseerBook, tafseerCategory } from "@/data/tafseer";

const backLabel = {
  ar: "الرجوع لقائمة التفسير",
  en: "Back to Tafsir Menu",
  am: "ወደ ተፍሲር ማውጫ ተመለስ",
};

export default function TafseerBookPage() {
  const { slug } = useParams();
  const book = getTafseerBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/tafseer/${slug}`}
      backHref="/tafseer"
      backLabel={backLabel}
      color={tafseerCategory.color}
      telegram={tafseerCategory.telegram}
    />
  );
}
