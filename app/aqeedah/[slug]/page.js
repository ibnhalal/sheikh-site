"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getAqeedahBook, aqeedahCategory } from "@/data/aqeedah";

const backLabel = {
  ar: "الرجوع لقائمة العقيدة",
  en: "Back to Aqida Menu",
  am: "ወደ አቂዳ ማውጫ ተመለስ",
};

export default function AqeedahBookPage() {
  const { slug } = useParams();
  const book = getAqeedahBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/aqeedah/${slug}`}
      backHref="/aqeedah"
      backLabel={backLabel}
      color={aqeedahCategory.color}
      telegram={aqeedahCategory.telegram}
    />
  );
}
