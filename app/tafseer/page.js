"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { tafseerCategory, tafseerBooks } from "@/data/tafseer";

export default function TafseerPage() {
  const { lang } = useLanguage();

  return (
    <div style={{ "--primary": tafseerCategory.color }}>
      <SectionHeader backHref="/" color={tafseerCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: tafseerCategory.color }}
        >
          {tafseerCategory.title[lang]}
        </h1>
        <CategoryBookList
          books={tafseerBooks}
          basePath="/tafseer"
          color={tafseerCategory.color}
          variant="grid"
        />
        <TelegramCard href={tafseerCategory.telegram} color={tafseerCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
