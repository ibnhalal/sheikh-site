"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { hadithCategory, hadithBooks } from "@/data/hadith";

export default function HadithPage() {
  const { lang } = useLanguage();
  return (
    <div style={{ "--primary": hadithCategory.color }}>
      <SectionHeader backHref="/" color={hadithCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: hadithCategory.color }}
        >
          {hadithCategory.title[lang]}
        </h1>
        <CategoryBookList books={hadithBooks} basePath="/hadith" color={hadithCategory.color} variant="list" />
        <TelegramCard href={hadithCategory.telegram} color={hadithCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
