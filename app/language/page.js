"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { languageCategory, languageBooks } from "@/data/language";

export default function LanguagePage() {
  const { lang } = useLanguage();
  return (
    <div style={{ "--primary": languageCategory.color }}>
      <SectionHeader backHref="/" color={languageCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: languageCategory.color }}
        >
          {languageCategory.title[lang]}
        </h1>
        <CategoryBookList books={languageBooks} basePath="/language" color={languageCategory.color} variant="list" />
        <TelegramCard href={languageCategory.telegram} color={languageCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
