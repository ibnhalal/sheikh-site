"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getFiqhBook, fiqhCategory } from "@/data/fiqh";

const backLabel = {
  ar: "الرجوع لقائمة الفقه",
  en: "Back to Fiqh Menu",
  am: "ወደ ፊቅህ ማውጫ ተመለስ",
};

export default function FiqhBookPage() {
  const { slug } = useParams();
  const book = getFiqhBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/fiqh/${slug}`}
      backHref="/fiqh"
      backLabel={backLabel}
      color={fiqhCategory.color}
      telegram={fiqhCategory.telegram}
    />
  );
}
