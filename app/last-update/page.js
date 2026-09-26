"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { lastUpdateCategory, lastUpdateBooks } from "@/data/lastUpdate";

export default function LastUpdatePage() {
  const { lang } = useLanguage();
  return (
    <div style={{ "--primary": lastUpdateCategory.color }}>
      <SectionHeader backHref="/" color={lastUpdateCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: lastUpdateCategory.color }}
        >
          {lastUpdateCategory.title[lang]}
        </h1>
        <CategoryBookList books={lastUpdateBooks} basePath="/last-update" color={lastUpdateCategory.color} variant="list" />
        <TelegramCard href={lastUpdateCategory.telegram} color={lastUpdateCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
