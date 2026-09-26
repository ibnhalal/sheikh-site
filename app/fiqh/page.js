"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { fiqhCategory, fiqhBooks } from "@/data/fiqh";

export default function FiqhPage() {
  const { lang } = useLanguage();
  return (
    <div style={{ "--primary": fiqhCategory.color }}>
      <SectionHeader backHref="/" color={fiqhCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: fiqhCategory.color }}
        >
          {fiqhCategory.title[lang]}
        </h1>
        <CategoryBookList books={fiqhBooks} basePath="/fiqh" color={fiqhCategory.color} variant="list" />
        <TelegramCard href={fiqhCategory.telegram} color={fiqhCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
