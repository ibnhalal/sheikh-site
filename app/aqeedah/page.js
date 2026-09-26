"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import CategoryBookList from "@/components/CategoryBookList";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/Footer";
import { aqeedahCategory, aqeedahBooks } from "@/data/aqeedah";

export default function AqeedahPage() {
  const { lang } = useLanguage();

  return (
    <div style={{ "--primary": aqeedahCategory.color }}>
      <SectionHeader backHref="/" color={aqeedahCategory.color} />
      <div className="w-[92%] max-w-[1000px] mx-auto">
        <h1
          className="font-amiri text-3xl md:text-4xl font-bold text-center py-8"
          style={{ color: aqeedahCategory.color }}
        >
          {aqeedahCategory.title[lang]}
        </h1>
        <CategoryBookList
          books={aqeedahBooks}
          basePath="/aqeedah"
          color={aqeedahCategory.color}
          variant="list"
        />
        <TelegramCard href={aqeedahCategory.telegram} color={aqeedahCategory.color} />
      </div>
      <Footer />
    </div>
  );
}
