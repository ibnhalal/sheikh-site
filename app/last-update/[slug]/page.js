"use client";

import { useParams } from "next/navigation";
import LessonIndex from "@/components/LessonIndex";
import { getLastUpdateBook, lastUpdateCategory } from "@/data/lastUpdate";

const backLabel = {
  ar: "الرجوع لقائمة آخر التحديثات",
  en: "Back to Updates Menu",
  am: "ወደ ትምህርቶች ዝርዝር ተመለስ",
};

export default function LastUpdateBookPage() {
  const { slug } = useParams();
  const book = getLastUpdateBook(slug);

  return (
    <LessonIndex
      book={book}
      basePath={`/last-update/${slug}`}
      backHref="/last-update"
      backLabel={backLabel}
      color={lastUpdateCategory.color}
      telegram={lastUpdateCategory.telegram}
    />
  );
}
