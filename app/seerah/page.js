"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { seerahCategory, seerahBooks } from "@/data/seerah";

export default function SeerahPage() {
  const { lang } = useLanguage();
  return (
    <div style={{ "--primary": seerahCategory.color }}>
      <SectionHeader backHref="/" color={seerahCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: seerahCategory.color }}
        >
          {seerahCategory.title[lang]}
        </h1>
        <CategoryBookList
          books={seerahBooks}
          basePath="/seerah"
          color={seerahCategory.color}
          variant="list"
        />
        <TelegramCard href={seerahCategory.telegram} color={seerahCategory.color} />
      </div>
      <Footer />
    </div>
  );
}